import { Request, Response } from 'express'
import { DoctorInfo } from '../models'
import validation from '../validation/'
import CustumError from '../helpers/errorsHandling/CustumError'

export default class DoctorController {
  public static async doctorInfo (req :Request, res :Response) {
    const { DoctorId, clinicLocation, workplace, hourRate } = req.body
    try {
      await validation.doctorInfoValid({ DoctorId, clinicLocation, workplace, hourRate })
      await DoctorInfo.create({ DoctorId, clinicLocation, workplace, hourRate })
      res.json({ status: 200, massage: 'Welcome' })
    } catch (error) {
      throw new CustumError(400,JSON.stringify(error) )
      
    }
  }
}
