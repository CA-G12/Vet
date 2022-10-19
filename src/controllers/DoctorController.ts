import { Request, Response } from 'express'
import { DoctorInfo } from '../models'
import validation from '../validation/'

export default class DoctorController {
  public static async doctorInfo (req :Request, res :Response) {
    const { DoctorId, clinicLocation, workplace, hourRate } = req.body
    try {
      await validation.doctorInfoValid({ DoctorId, clinicLocation, workplace, hourRate })
      await DoctorInfo.create({ DoctorId, clinicLocation, workplace, hourRate })
      res.json({ status: 200, massage: 'Welcome' })
    } catch (error) {
      res.json({
        status: 400,
        massage: error
      })
    }
  }
}
