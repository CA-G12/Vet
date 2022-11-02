import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import { isAuth } from '../middlewares/auth.middleware';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

const router = Router();
router.post('/posts', PostsController.store);
router.delete(
  '/post/:postId',
  errorWrapper(isAuth),
  errorWrapper(PostsController.delete),
);
export default router;
