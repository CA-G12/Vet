import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';

const router = Router();
router.post('/posts', isAuth, errorWrapper(PostsController.store));
router.get('/posts', PostsController.index);
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
