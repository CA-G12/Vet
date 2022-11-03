import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import { isAuth } from '../middlewares/auth.middleware';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

const router = Router();
router.post('/posts', PostsController.store);
router.get('/posts', PostsController.index);
router.put(
  '/post/:postId',
  errorWrapper(isAuth),
  errorWrapper(PostsController.update),
);

export default router;
