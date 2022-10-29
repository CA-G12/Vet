import { Router } from 'express';
import PostRoutes from './posts';
import CommentsRoutes from './comments';

import signInRouter from './users';
import PostsController from '../controllers/PostsController';

import auth from './auth';

const router = Router();

router.get('/posts', PostsController.index);

router.use(signInRouter);
router.use(PostRoutes);
router.use(CommentsRoutes);

router.use(auth);

export default router;
