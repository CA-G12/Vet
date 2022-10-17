import PostsController from '../controllers/PostsController'
import { Router } from 'express'

const router = Router()
router.post('/posts', PostsController.store)
router.get('/posts', PostsController.index)

export default router
