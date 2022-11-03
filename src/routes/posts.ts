import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';

const router = Router();
router.post('/posts', isAuth, errorWrapper(PostsController.store));
router.get('/posts', PostsController.index);

export default router;
