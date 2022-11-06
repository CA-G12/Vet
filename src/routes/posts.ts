import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import { isAuth } from '../middlewares/auth.middleware';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

const router = Router();
router.get('/posts', PostsController.index);
router.post('/posts', PostsController.store);
router.put(
  '/post/:postId',
  // errorWrapper(isAuth),
  errorWrapper(PostsController.update),
);

router.delete(
  '/post/:postId',
  errorWrapper(isAuth),
  errorWrapper(PostsController.delete),
);
export default router;
