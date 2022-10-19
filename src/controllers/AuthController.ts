import { NextFunction, Request, Response } from 'express'
import environment from '../config/environment'
import bcrypt from 'bcryptjs'
import { Secret, sign } from 'jsonwebtoken'
import signInSchema from '../schemes/auth/signIn'
import { User } from '../models'

// AuthController.ts file
export default class AuthController {
  // login based on user providing a series of specific user information
  public static async signin (req: Request, res: Response, next:NextFunction) {
    const { secretKey } = environment
    const { email, password } = req.body

    const { error } = await signInSchema({ email, password })
    if (error) {
      throw new Error(error)
    }
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw new Error('The email address you entered isn\'t connected to an account')
    }
    const isValid:Boolean = await bcrypt.compare(password, user.password ?? '')
    if (!isValid) {
      throw new Error('The password that you\'ve entered is incorrect')
    }
    const payload = {
      id: user.id,
      username: user.name,
      email: user.email,
      role: user.role
    }
    const token = sign(payload, secretKey as Secret)
    res.cookie('token', token, { httpOnly: true }).json({
      status: 200,
      data: { id: user.id, userName: user.name, avatar: user.avatar }
    })
  }

  // Registration based on user providing a series of specific user information
  public static async signup (req: Request, res: Response) {
  // code here
  }
}
