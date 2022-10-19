import { Router } from 'express'
import signInRouter from './users'
import PostsController from '../controllers/PostsController'

const router = Router()
router.get('/posts', PostsController.index)
router.use(signInRouter)

export default router
