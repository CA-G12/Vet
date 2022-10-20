import { Router } from 'express'
<<<<<<< HEAD
import signInRouter from './users'
import PostsController from '../controllers/PostsController'

const router = Router()
router.get('/posts', PostsController.index)
router.use(signInRouter)
=======
import PostRoutes from './posts'
import auth from './auth'

const router = Router()
router.use(PostRoutes)
router.use(auth)
>>>>>>> 4b8cb7aa7cee5d45b8fcda921785fff31bc46f50

export default router
