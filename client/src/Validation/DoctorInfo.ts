import * as Yup from 'yup';

const doctorInfo = Yup.object().shape({
  clinicLocation: Yup.string().required('You must enter your Location'),
  workplace: Yup.string().required('You must enter your work place'),
  hourRate: Yup.string().required('You must enter your hour rate '),
});
export default doctorInfo;
