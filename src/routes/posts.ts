import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';

const router = Router();
router.post(
  '/posts',
  errorWrapper(isAuth),
  errorWrapper(PostsController.store),
);
router.get('/posts', errorWrapper(PostsController.index));
router.get('/posts/:id', errorWrapper(PostsController.userPosts));

router.put(
  '/post/:postId',
  errorWrapper(isAuth),
  errorWrapper(PostsController.update),
);

router.delete(
  '/post/:postId',
  errorWrapper(isAuth),
  errorWrapper(PostsController.delete),
);
export default router;
