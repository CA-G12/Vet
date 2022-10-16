import express from 'express'
import AuthController from '../controllers/AuthController'
import DoctorController from '../controllers/DoctorController'
const router = express.Router()

router.post('/sign-up', AuthController.signup)
router.post('/doctor-info', DoctorController.doctorInfo)
export default router
