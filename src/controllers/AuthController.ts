import bcrypt from 'bcryptjs'
import environment from '../config/environment'
import { sign, Secret } from 'jsonwebtoken'
import { Request, Response } from 'express'
import { User } from '../models'
import validation from '../validation/'
import CustomError from '../helpers/errorsHandling/CustomError'

export default class AuthController {
  
  public static async signup (req: Request, res: Response) {
    const { name, email, role, password, confirmPassword } = req.body
      await validation.signupValid({ name, email, role, password, confirmPassword })
      const searchEmail = await User.findAll({ where: { email } })
      if (searchEmail.length === 0) {
        const newUser = await User.create({ name, email, role, password: await bcrypt.hash(password, 15) })
        const token = await sign({ id: newUser.id, name, email ,avatar:newUser.avatar }, environment.secretKey as Secret)
        res.json({ token, name: newUser.name ,avatar:newUser.avatar })
      }else{
        throw new CustomError(400, 'You have account')
      }
  }
}