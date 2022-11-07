import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import DoctorController from '../controllers/DoctorController';
import { isAuth } from '../middlewares/auth.middleware';

const userRouter = Router();

userRouter.get(
  '/users/chat/:id',
  isAuth,
  errorWrapper(DoctorController.getOneDoctor),
);

export default userRouter;
