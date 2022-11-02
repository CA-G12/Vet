import { Router } from 'express';
import PostRoutes from './posts';
import CommentsRoutes from './comments';
import appointment from './appointment';
import PostsController from '../controllers/PostsController';

import auth from './auth';

const router = Router();

router.get('/posts', PostsController.index);
router.use(PostRoutes);
router.use(CommentsRoutes);
router.use(appointment);
router.use(auth);

export default router;
