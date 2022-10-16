import PostsController from '../controllers/PostsController'
import { Router } from 'express'

const router = Router()
router.post('/api/v1/posts', PostsController.store)

export default router
