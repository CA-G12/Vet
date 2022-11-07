import { Box } from '@mui/system';
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
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ width: { xs: '100%', sm: '50%' }, margin: ' 40px auto' }}
    >
      {doctors.map((doctor: IUser) => (
        <Doctor key={doctor.id} user={doctor} />
      ))}
    </Box>
  );
};

export default Doctors;
