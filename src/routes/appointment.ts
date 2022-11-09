import Appointment from '../controllers/Appointment';
import express from 'express';
import { isAuth } from '../middlewares/auth.middleware';
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper';

const router = express.Router();
router.get(
  '/Appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.userAppointment),
);
router.get(
  '/Appointment/:DoctorId',
  errorWrapper(Appointment.doctorAppointment),
);
router.get(
  '/pending-appointment/:DoctorId',
  errorWrapper(isAuth),
  errorWrapper(Appointment.pendingAppointment),
);
router.delete(
  '/Appointment/:id',
  errorWrapper(isAuth),
  errorWrapper(Appointment.deleteDoctorAppointment),
);
router.post(
  '/Appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.insertAppointment),
);
router.put(
  '/Appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.updateDoctorAppointment),
);
router.put(
  '/dragAppointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.dragDoctorAppointment),
);
router.put(
  '/pending-appointment',
  errorWrapper(isAuth),
  errorWrapper(Appointment.acceptAppointment),
);
export default router;
