import CommentsController from '../controllers/CommentsController'
import { Router } from 'express'

const router = Router()
router.get('/posts/:postId/comments', CommentsController.index)
router.post('/post/:postId/comments', CommentsController.store)
router.delete('/post/:PostId/comments/:id', CommentsController.dstroy)
router.put('/post/:PostId/comments/:id', CommentsController.put)
export default router
