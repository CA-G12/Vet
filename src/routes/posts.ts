import PostsController from '../controllers/PostsController'
import { Router } from 'express'

const router = Router()
router.post('/posts', PostsController.store)

export default router
