import bcrypt from 'bcryptjs'
import environment from '../config/environment'
import { sign, Secret } from 'jsonwebtoken'
import { Request, Response } from 'express'
import { User } from '../models'
import validation from '../validation/'
import ISignup from '../interfaces'

export default class AuthController {
  public secretKey : Secret

  constructor () {
    this.secretKey = environment.secretKey
  }

  public static async creation ({ name, email, role, password, res }:ISignup) {
    const newUser = await User.create({ name, email, role, password: await bcrypt.hash(password, 15) })
    const token = await sign({ id: newUser.id }, environment.secretKey as Secret)
    res.json({ token, name: newUser.name, avatar: newUser.avatar })
  }

  public static async signup (req: Request, res: Response) {
    const { name, email, role, password } = req.body

    try {
      await validation.signupValid({ name, email, role, password })
      const searchEmail = await User.findAll({ where: { email } })
      searchEmail.length === 0 ? AuthController.creation({ name, email, role, password, res }) : res.json({ status: 400, massage: 'You have account' })
    } catch (err) {
      res.status(400).json({ status: 400, massage: err })
    }
  }
}
