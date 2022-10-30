import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Doctor from '../components/Doctor';
import IUser from '../Interfaces/post/IUser';
import ApiServices from '../services/ApiService';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    const allDoctors = await ApiServices.get('doctors');
    setDoctors(allDoctors.data);
  };
  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <Stack spacing={3} direction="column">
      {doctors.map((doctor: IUser) => (
        <Doctor key={doctor.id} user={doctor} />
      ))}
    </Stack>
  );
};

export default Doctors;
