import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import Doctor from '../components/Doctor';
import IUser from '../Interfaces/post/IUser';
import ApiServices from '../services/ApiService';

const Emergency = () => {
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
      <p
        style={{
          fontSize: '36px',
          lineHeight: '43.57px',
          color: '#D53449',
          marginBottom: '20px',
        }}
      >
        Available Emergency Doctors
      </p>
      {doctors.map((doctor: IUser) => (
        <Doctor isEmergency key={doctor.id} user={doctor} />
      ))}
    </Box>
  );
};

export default Emergency;
