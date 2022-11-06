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

export default router;
