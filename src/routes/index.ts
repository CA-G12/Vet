import { Router } from 'express';
import PostRoutes from './posts';
import CommentsRoutes from './comments';
import appointment from './appointment';
import PostsController from '../controllers/PostsController';
import LikesRoutes from './Likes';

import auth from './auth';
import userRouter from './users';

const router = Router();

router.get('/posts', PostsController.index);
router.use(LikesRoutes);
router.use(PostRoutes);
router.use(CommentsRoutes);
router.use(userRouter);
router.use(appointment);
router.use(auth);

export default router;
