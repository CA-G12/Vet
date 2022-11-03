// code here

import validation from '../validation/';
import CustomError from '../helpers/errorsHandling/CustomError';

import { Request, Response } from 'express';
import environment from '../config/environment';
import bcrypt from 'bcryptjs';
import { Secret, sign } from 'jsonwebtoken';
import signInSchema from '../schemes/auth/signIn';
import { User } from '../models';

// AuthController.ts file
export default class AuthController {
  // login based on user providing a series of specific user information
  public static async signin(req: Request, res: Response) {
    const { secretKey } = environment;
    const { email, password } = req.body;

    await signInSchema({ email, password });

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new CustomError(
        404,
        "The email address you entered isn't connected to an account",
      );
    }
    const isValid: boolean = await bcrypt.compare(
      password,
      user.password ?? '',
    );
    if (!isValid) {
      throw new CustomError(
        422,
        "The password that you've entered is incorrect",
      );
    }
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    };
    const token = sign(payload, secretKey as Secret);

    res.set('token', token).json({
      status: 200,
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        avatar: user.avatar,
        token,
      },
    });
  }

  public static async signup(req: Request, res: Response) {
    const { name, email, role, password, confirmPassword } = req.body;
    await validation.signupValid({
      name,
      email,
      role,
      password,
      confirmPassword,
    });
    const searchEmail = await User.findAll({ where: { email } });
    if (searchEmail.length === 0) {
      const newUser = await User.create({
        name,
        email,
        role,
        password: await bcrypt.hash(password, 15),
      });
      const token = await sign(
        {
          id: newUser.id,
          name: newUser.name,
          avatar: newUser.avatar,
          role: newUser.role,
        },
        environment.secretKey as Secret,
      );
      res.json({
        token,
        id: newUser.id,
        name: newUser.name,
        avatar: newUser.avatar,
        role: newUser.role,
        email: newUser.email,
      });
    } else {
      throw new CustomError(400, 'You have account');
    }
  }
}
