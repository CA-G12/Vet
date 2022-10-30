import Appointment from '../controllers/Appointment'
import express from 'express'
import errorWrapper from '../helpers/errorsHandling/customErrorWrapper'

const router = express.Router()
router.get('/Appointment/:id', errorWrapper(Appointment.doctorAppointment))
router.delete('/Appointment/:doctorId/:id', errorWrapper(Appointment.deleteDoctorAppointment))
router.post('/Appointment', errorWrapper(Appointment.insertDoctorAppointment))
router.put('/Appointment', errorWrapper(Appointment.updateDoctorAppointment))

router.get('/pending-appointment/:DoctorId', errorWrapper(Appointment.pendingAppointment))
router.put('/pending-appointment', errorWrapper(Appointment.acceptAppointment))
export default router
