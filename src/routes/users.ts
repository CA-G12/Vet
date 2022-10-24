import { Router } from 'express'
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper'
import UsersController from '../controllers/AuthController'

const signInRouter = Router()

signInRouter.post('/signin', errorWrapper(UsersController.signin))

export default signInRouter
