import CommentsController from '../controllers/CommentsController';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

import { Router } from 'express';

const router = Router();
router.get('/posts/:postId/comments', errorWrapper(CommentsController.index));
router.post('/post/:postId/comments', errorWrapper(CommentsController.store));
router.delete(
  '/post/:PostId/comments/:id',
  errorWrapper(CommentsController.dstroy),
);
router.put('/post/:PostId/comments/:id', errorWrapper(CommentsController.put));
export default router;
