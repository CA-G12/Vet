import Appointment from '../controllers/Appointment';
import express from 'express';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';
import { isAuth } from '../middlewares/auth.middleware';

const router = express.Router();
router.get(
  '/Appointment/:id',
  errorWrapper(isAuth),
  errorWrapper(Appointment.doctorAppointment),
);
router.delete(
  '/Appointment/:doctorId/:id',
  errorWrapper(isAuth),
  errorWrapper(Appointment.deleteDoctorAppointment),
);
router.post(
  '/Appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.insertDoctorAppointment),
);
router.put(
  '/Appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.updateDoctorAppointment),
);

router.get(
  '/pending-appointment/:DoctorId',
  errorWrapper(isAuth),
  errorWrapper(Appointment.pendingAppointment),
);
router.put(
  '/pending-appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.acceptAppointment),
);

export default router;
