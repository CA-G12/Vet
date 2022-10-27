import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Doctor from '../components/Doctor';
import IUser from '../Interfaces/post/IUser';
import ApiServices from '../services/ApiService';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    ApiServices.get('doctors').then((data) => setDoctors(data.data));
  }, []);
  return (
    <Stack spacing={3} direction="column">
      {doctors.map((doctor:IUser) => <Doctor key={doctor.id} user={doctor} />)}
    </Stack>

  );
};

export default Doctors;
