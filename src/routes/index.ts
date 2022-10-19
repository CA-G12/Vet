<<<<<<< HEAD
import express from 'express'
import AuthController from '../controllers/AuthController'
import DoctorController from '../controllers/DoctorController'
const router = express.Router()

router.post('/sign-up', AuthController.signup)
router.post('/doctor-info', DoctorController.doctorInfo)
=======
import { Router } from 'express'
import PostsController from '../controllers/PostsController'
const router = Router()
router.get('/posts', PostsController.index)

>>>>>>> 88543d0d5444316b467fab68ce5c028d1c46b3d3
export default router
