import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

const router = Router();
router.post('/posts', PostsController.store);
router.get('/posts', PostsController.index);
router.get('/posts/:id', errorWrapper(PostsController.userPosts));

export default router;
