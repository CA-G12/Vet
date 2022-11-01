import { Router } from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import UsersController from '../controllers/AuthController';
import DoctorController from '../controllers/DoctorController';
import { isAuth } from '../middlewares/auth.middleware';

const signInRouter = Router();

signInRouter.post('/signin', errorWrapper(UsersController.signin));
signInRouter.get(
  '/users/chat/:id',
  isAuth,
  errorWrapper(DoctorController.getOneDoctor),
);

export default signInRouter;
