import { Request, Response } from 'express'
import User from '../models/User'
import Booking from '../models/Booking'
import AppointmentValid from '../validation/Appointment'
import CustomError from '../helpers/errorsHandling/CustomError'

export default class Appointment {
  public static async doctorAppointment (req:Request, res:Response) {
    const { id } = req.params
    const doctorAppointment = await Booking.findAll({ attributes: ['id', 'title', 'start'], where: { DoctorId: id, status: 'ACCEPTED' } })
    if (doctorAppointment) { res.json(doctorAppointment) }
  }

  public static async insertDoctorAppointment (req:Request, res:Response) {
    const { description, title, start, end, DoctorId, id } = req.body

    await AppointmentValid.addAppointmentValid({ description, title, start, end, DoctorId, id })
    const findUserID = await User.findAll({ where: { id } })
    const finalDoctorID = await User.findAll({ where: { id: DoctorId } })

    if (finalDoctorID.length === 1 && findUserID.length === 1) {
      if (id === DoctorId) {
        const userAppointment = await Booking.create({ description, title, start, UserId: id, DoctorId, end, status: 'ACCEPTED' })
        res.json({ id: userAppointment.id, title: userAppointment.title, start: userAppointment.start })
      } else {
        const doctorAppointment = await Booking.create({ UserId: id, description, title, start, DoctorId, end, status: 'PENDING' })
        res.json({ id: doctorAppointment.id, title: doctorAppointment.title, start: doctorAppointment.start })
      }
    } else {
      throw new CustomError(404, 'user not found ')
    }
  }

  public static async deleteDoctorAppointment (req:Request, res:Response) {
    const { doctorId, id } = req.params
    await AppointmentValid
    const findBook = await Booking.findAll({ where: { id, DoctorId: doctorId } })
    if (findBook.length === 1) {
      await Booking.destroy({ where: { id } })
      res.json({ done: 'done' })
    } else {
      throw new CustomError(404, 'Booking not found ')
    }
  }

  public static async updateDoctorAppointment (req:Request, res:Response) {
    const { DoctorId, id, start, end } = req.body
    await AppointmentValid.updateAppointmentValid({ DoctorId, id, start, end })

    const findBook = await Booking.findOne({ where: { id, DoctorId } })
    if (findBook) {
      findBook.start = start
      findBook.end = end
      await findBook.save()
      res.json(
        {
          id: findBook.id,
          start: findBook.start,
          end: findBook.end,
          DoctorId

        })
    } else {
      throw new CustomError(404, 'Booking not found ')
    }
  }

  public static async pendingAppointment (req:Request, res:Response) {
    const { DoctorId } = req.params
    const findBook = await Booking.findAll({ attributes: ['id', 'DoctorId', 'start', 'end', 'description', 'title'], where: { DoctorId, status: 'PENDING' } })
    if (findBook) {
      res.json(findBook)
    } else {
      throw new CustomError(404, ' No pending Appointment ')
    }
  }

  public static async acceptAppointment (req:Request, res:Response) {
    const { DoctorId, id, status } = req.body

    const findBook = await Booking.findOne({ where: { id, DoctorId, status: 'PENDING' } })
    if (findBook && status === 'ACCEPTED') {
      findBook.status = 'ACCEPTED'
      await findBook.save()
      res.json(
        {
          id: findBook.id,
          start: findBook.start,
          end: findBook.end,
          status: findBook.status,
          DoctorId
        })
    } else if (status === 'REJECTED') {
      await Booking.destroy({ where: { id } })
      res.json({ done: 'deleted successfully' })
    } else {
      throw new CustomError(404, 'Booking not found ')
    }
  }
}
