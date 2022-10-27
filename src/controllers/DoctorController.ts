import { Request, Response } from 'express'
import { DoctorInfo, User } from '../models'
import validation from '../validation/'
import CustomError from '../helpers/errorsHandling/CustomError'

export default class DoctorController {
  public static async doctorInfo (req :Request, res :Response) {
    const { doctorId, clinicLocation, workplace, hourRate } = req.body
    const doctorFound = await User.findAll({ where: { id: doctorId, role: 'DOCTOR' } })
    if (doctorFound.length === 1) {
      await validation.doctorInfoValid({ doctorId, clinicLocation, workplace, hourRate })
      await DoctorInfo.create({ doctorId, clinicLocation, workplace, hourRate })
      res.json({ massage: 'Welcome' })
    } else {
      throw new CustomError(400, "you don't have account")
    }
  }

  public static async getAllDoctor (req :Request, res :Response) {
    const doctors = await User.findAll({
      attributes: ['avatar', 'email', 'id', 'name', 'role'],
      include: {
        model: DoctorInfo, attributes: ['workplace']
      },
      where: {
        role: 'DOCTOR'
      }
    })
    res.json(doctors)
  }
}
