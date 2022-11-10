import * as yup from 'yup';

const Appointment = yup.object().shape({
  DoctorId: yup.number().required(),
  description: yup
    .string()
    .min(10, 'please enter description')
    .required('please enter description'),
  title: yup
    .string()
    .min(5, 'your title enter more letters')
    .required('please enter title'),
});
export default Appointment;
