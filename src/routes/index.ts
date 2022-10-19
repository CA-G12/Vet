import express from 'express'
import AuthController from '../controllers/AuthController'
import DoctorController from '../controllers/DoctorController'
import PostsController from '../controllers/PostsController'
const router =express. Router()

router.post('/sign-up', AuthController.signup)
router.post('/doctor-info', DoctorController.doctorInfo)
router.get('/posts', PostsController.index)

export default router
