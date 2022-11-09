import { Request, Response } from 'express';
import User from '../models/User';
import Booking from '../models/Booking';
import AppointmentValid from '../validation/Appointment';
import CustomError from '../helpers/errorsHandling/CustomError';
import { Op } from 'sequelize';
export default class Appointment {
  public static async userAppointment(req: Request, res: Response) {
    const userAppointment = await Booking.findAll({
      attributes: ['id', 'title', 'start', 'description', 'status'],
      include: {
        model: User,
        as: 'User',
        attributes: ['name'],
      },
      where: { UserId: req.user?.id },
    });
    res.json({ userAppointment });
  }

  public static async doctorAppointment(req: Request, res: Response) {
    const { DoctorId } = req.params;
    const doctorAppointment = await Booking.findAll({
      attributes: ['id', 'title', 'start', 'end', 'description'],
      where: { DoctorId, status: 'ACCEPTED' },
    });
    res.json({ docAppointment: doctorAppointment });
  }

  public static async insertDoctorAppointment(req: Request, res: Response) {
    const { appointment } = req.body;
    const doctorAppointment = await Booking.create({
      ...appointment,
      UserId: req.user?.id,
      status: 'ACCEPTED',
    });
    res.json({ appointment: doctorAppointment, msg: 'Accepted' });
  }

  public static async insertUserAppointment(req: Request, res: Response) {
    const { appointment } = req.body;
    const userAppointment = await Booking.create({
      UserId: req.user?.id,
      ...appointment,
      status: 'PENDING',
    });
    res.json({ appointment: userAppointment, msg: 'Your book in pending ' });
  }

  public static async insertAppointment(req: Request, res: Response) {
    const { appointment } = req.body;
    await AppointmentValid.addAppointmentValid({ ...appointment });
    const findUserID = await User.findOne({ where: { id: req.user?.id } });
    const finalDoctorID = await User.findOne({
      where: { id: appointment.DoctorId },
    });
    const userFound = findUserID && finalDoctorID;

    const findAppointment = await Booking.findAll({
      where: { start: appointment.start, status: 'ACCEPTED' },
    });

    if (findAppointment.length > 0)
      throw new CustomError(402, 'The Appointment exist');

    if (req.user?.id === Number(appointment.DoctorId) && userFound) {
      Appointment.insertDoctorAppointment(req, res);
    } else if (req.user?.id !== Number(appointment.DoctorId) && userFound) {
      Appointment.insertUserAppointment(req, res);
    } else {
      throw new CustomError(404, 'user not found ');
    }
  }

  public static async deleteDoctorAppointment(req: Request, res: Response) {
    const { id } = req.params;
    const userID = req.user?.id;

    const findBook = await Booking.findAll({
      where: { id, [Op.or]: [{ UserId: userID }, { DoctorId: userID }] },
    });
    if (findBook.length === 1) {
      await Booking.destroy({ where: { id } });
      res.json({ done: 'done' });
    } else {
      throw new CustomError(404, 'Booking not found ');
    }
  }

  public static async updateDoctorAppointment(req: Request, res: Response) {
    const { id, title, description } = req.body;
    const DocID = req.user?.id;

    await AppointmentValid.updateAppointmentValid({
      DoctorId: DocID,
      id,
      title,
      description,
    });

    const findBook = await Booking.findOne({
      attributes: ['title', 'description', 'end', 'start', 'id'],
      where: { id, DoctorId: DocID },
    });
    if (findBook) {
      findBook.title = title;
      findBook.description = description;
      await findBook.save();
      res.json(findBook);
    } else {
      throw new CustomError(404, 'Booking not found ');
    }
  }

  public static async dragDoctorAppointment(req: Request, res: Response) {
    const { id, start, end } = req.body;
    const DoctorId = req.user?.id;
    await AppointmentValid.dragAppointmentValid({ DoctorId, id, start, end });

    const findAppointment = await Booking.findAll({
      where: { start, status: 'ACCEPTED' },
    });
    if (findAppointment.length > 0)
      throw new CustomError(402, 'This appointment is Booked');

    const findBook = await Booking.findOne({
      attributes: ['id', 'start', 'end'],
      where: { id, DoctorId },
    });
    if (findBook) {
      findBook.start = start;
      findBook.end = end;
      await findBook.save();
      res.json({ newTime: findBook });
    }
  }

  public static async pendingAppointment(req: Request, res: Response) {
    const { DoctorId } = req.params;
    const findBook = await Booking.findAll({
      attributes: ['id', 'start', 'end', 'description', 'title'],
      include: {
        model: User,
        as: 'User',
        attributes: ['name', 'avatar'],
      },
      where: { DoctorId, status: 'PENDING' },
    });
    if (findBook) {
      res.json({ pending: findBook });
    } else {
      res.json({ msg: ' No pending Appointment ' });
    }
  }

  public static async acceptAppointment(req: Request, res: Response) {
    const { id, status } = req.body;
    const DoctorId = req.user?.id;

    const findBook = await Booking.findOne({
      attributes: ['id', 'start', 'end', 'description', 'title'],
      where: { id, DoctorId, status: 'PENDING' },
    });
    if (findBook && status === 'ACCEPTED') {
      findBook.status = 'ACCEPTED';
      await findBook.save();
      res.json({ msg: 'accept new Appointment', accepted: findBook });
    } else if (status === 'REJECTED') {
      await Booking.destroy({ where: { id } });
      res.json({ msg: 'deleted successfully' });
    } else {
      throw new CustomError(404, 'Booking not found ');
    }
  }
}
