import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Doctor from '../components/Emergency';
import IUser from '../Interfaces/post/IUser';
import { useActive } from '../hooks/useActive';
import { useAuth } from '../hooks/UseAuthar';

const Emergency = () => {
  const { user } = useAuth();
  const [doctors, setDoctors] = useState([]);
  const active = useActive();
  useEffect(() => {
    setDoctors(active);
  }, [active]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ width: { xs: '100%', sm: '50%' }, margin: ' 40px auto' }}
      minHeight="50vh"
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

      {user ? (
        doctors.map((doctor: IUser) => (
          <Box width={{ xs: '100%', sm: '70%' }}>
            <Doctor key={doctor.id} user={doctor} /> <Divider />
          </Box>
        ))
      ) : (
        <h1>you have to signIn pro!</h1>
      )}
    </Box>
  );
};

export default Emergency;
