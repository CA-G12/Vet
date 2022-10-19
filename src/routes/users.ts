import { Router } from 'express'
import UsersController from '../controllers/AuthController'

const signInRouter = Router()

signInRouter.post('/signin', UsersController.signin)

export default signInRouter
