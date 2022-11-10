import { Box, Container } from '@mui/system';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
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
    <Box>
      {doctors
        ? doctors.map((doctor: IUser) => (
            <Container maxWidth="md">
              <Doctor key={doctor.id} user={doctor} />
              <Divider />
            </Container>
          ))
        : null}
    </Box>
  );
};

export default Doctors;
