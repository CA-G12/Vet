import express from 'express';
import AuthController from '../controllers/AuthController';
import DoctorController from '../controllers/DoctorController';
import { isAuthenticated } from '../controllers/IsAuth';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';
const router = express.Router();

router.post('/sign-up', errorWrapper(AuthController.signup));
router.post('/sign-in', errorWrapper(AuthController.signin));
router.get('/user/me', errorWrapper(isAuth), errorWrapper(isAuthenticated));
router.get('/user/:id', errorWrapper(DoctorController.getDoctorInfo));
router.get('/doctors', errorWrapper(DoctorController.getAllDoctor));
router.post('/doctor-info', errorWrapper(DoctorController.doctorInfo));
router.put(
  '/doctor-info',
  errorWrapper(isAuth),
  errorWrapper(DoctorController.updateDoctorInfo),
);
router.put(
  '/user',
  errorWrapper(isAuth),
  errorWrapper(DoctorController.updateUserInfo),
);

export default router;
