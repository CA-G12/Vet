import CommentsController from '../controllers/CommentsController';
import { Router } from 'express';

const router = Router();
router.get('/posts/:postId/comments', CommentsController.index);

export default router;
