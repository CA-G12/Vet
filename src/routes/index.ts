import { Router } from 'express'
import PostsController from '../controllers/PostsController'
const router = Router()
router.get('/posts', PostsController.index)

export default router
