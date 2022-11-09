import express from 'express';
import AuthController from '../controllers/AuthController';
import DoctorController from '../controllers/DoctorController';
import { isAuthenticated } from '../controllers/IsAuth';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';
const router = express.Router();

router.post('/sign-up', errorWrapper(AuthController.signup));
router.post('/sign-in', errorWrapper(AuthController.signin));
router.post('/doctor-info', errorWrapper(DoctorController.doctorInfo));
router.get('/user/me', errorWrapper(isAuth), errorWrapper(isAuthenticated));
router.get('/doctors', errorWrapper(DoctorController.getAllDoctor));

export default router;
