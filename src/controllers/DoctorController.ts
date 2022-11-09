import { Request, Response } from 'express';
import { DoctorInfo, User } from '../models';
import validation from '../validation/';
import CustomError from '../helpers/errorsHandling/CustomError';
import { Secret, sign } from 'jsonwebtoken';
import environment from '../config/environment';

export default class DoctorController {
  public static async doctorInfo(req: Request, res: Response) {
    const { DoctorId, clinicLocation, workplace, hourRate, universityDegree } =
      req.body;
    const doctorFound = await User.findAll({
      where: { id: DoctorId, role: 'DOCTOR' },
    });
    if (doctorFound.length === 1) {
      await validation.doctorInfoValid({
        DoctorId,
        clinicLocation,
        workplace,
        hourRate,
        universityDegree,
      });
      await DoctorInfo.create({
        DoctorId,
        clinicLocation,
        workplace,
        hourRate,
        universityDegree,
      });
      res.json({ massage: 'Welcome' });
    } else {
      throw new CustomError(400, "you don't have account");
    }
  }

  public static async getAllDoctor(req: Request, res: Response) {
    const doctors = await User.findAll({
      attributes: ['avatar', 'email', 'id', 'name', 'role'],
      include: {
        model: DoctorInfo,
        as: 'Doctor',
        attributes: ['workplace'],
      },
      where: {
        role: 'DOCTOR',
      },
    });
    res.json(doctors);
  }

  public static async getDoctorInfo(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findOne({
      attributes: ['name', 'role', 'email', 'avatar'],
      where: { id },
    });
    if (user?.role === 'DOCTOR') {
      const doctorInfo = await DoctorInfo.findOne({
        attributes: ['hourRate', 'clinicLocation', 'workplace'],
        where: {
          DoctorId: id,
        },
      });
      res.json({ user, doctorInfo });
    } else {
      res.json({ user });
    }
  }

  public static async updateDoctorInfo(req: Request, res: Response) {
    const { workplace, clinicLocation, hourRate } = req.body;
    const doctorInfo = await DoctorInfo.findOne({
      where: {
        DoctorId: req.user?.id,
      },
    });
    if (doctorInfo) {
      doctorInfo.hourRate = hourRate;
      doctorInfo.clinicLocation = clinicLocation;
      doctorInfo.workplace = workplace;
      doctorInfo.save();
      res.json({ doctorInfo });
    } else {
      await validation.doctorInfoValid({
        DoctorId: req.user?.id,
        clinicLocation,
        workplace,
        hourRate,
      });
      const newDoctorInfo = await DoctorInfo.create({
        hourRate,
        clinicLocation,
        workplace,
        DoctorId: req.user?.id,
      });
      res.json({ newDoctorInfo });
    }
  }

  public static async updateUserInfo(req: Request, res: Response) {
    const { name, avatar } = req.body;
    const updatedData = await User.update(
      { name, avatar },
      { where: { id: req.user?.id }, returning: true },
    );
    const token = await sign(
      {
        id: updatedData[1][0].id,
        name: updatedData[1][0].name,
        email: updatedData[1][0].email,
        avatar: updatedData[1][0].avatar,
        role: updatedData[1][0].role,
      },
      environment.secretKey as Secret,
    );
    res.json({ updatedData: updatedData[1][0], token });
  }
}
