import LikesController from '../controllers/LikesController';
import { Router } from 'express';
import { isAuth } from '../middlewares/auth.middleware';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

const router = Router();
router.post(
  '/likes',
  errorWrapper(isAuth),
  errorWrapper(LikesController.store),
);
router.delete(
  '/likes/:postId',
  errorWrapper(isAuth),
  errorWrapper(LikesController.destroy),
);

export default router;
