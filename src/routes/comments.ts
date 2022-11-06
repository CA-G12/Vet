import CommentsController from '../controllers/CommentsController';
import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';

const router = Router();
router.get(
  '/posts/:postId/comments',
  errorWrapper(isAuth),
  errorWrapper(CommentsController.index),
);
router.post(
  '/post/:postId/comments',
  errorWrapper(isAuth),
  errorWrapper(CommentsController.store),
);
router.delete(
  '/post/:PostId/comments/:id',
  errorWrapper(isAuth),
  errorWrapper(CommentsController.dstroy),
);
router.put(
  '/post/:PostId/comments/:id',
  errorWrapper(isAuth),
  errorWrapper(CommentsController.put),
);
export default router;
