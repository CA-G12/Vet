import express from 'express'
import AuthController from '../controllers/AuthController'
import DoctorController from '../controllers/DoctorController'
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper'
const router = express.Router()

router.post('/sign-up', errorWrapper(AuthController.signup))
router.post('/sign-in', errorWrapper(AuthController.signin))
router.post('/doctor-info', errorWrapper(DoctorController.doctorInfo))

export default router
