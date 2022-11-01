import PostsController from '../controllers/PostsController';
import { Router } from 'express';
import { isAuth } from '../middlewares/auth.middleware';

const router = Router();
router.post('/posts', PostsController.store);
router.get('/posts', PostsController.index);
router.put('/posts', isAuth, PostsController.update);

export default router;
