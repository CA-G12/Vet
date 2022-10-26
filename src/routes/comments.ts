import CommentsController from '../controllers/CommentsController'
import { Router } from 'express'

const router = Router()
router.get('/posts/:postId/comments', CommentsController.index)
router.post('/post/:postId/comment', CommentsController.store)
router.delete('/post/:PostId/comment/:id', CommentsController.dstroy)
router.put('/post/:PostId/comment/:id', CommentsController.put)
export default router
