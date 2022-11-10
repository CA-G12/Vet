import { Container } from '@mui/system';
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
    <Container maxWidth="md" sx={{ minHeight: '57vh' }}>
      <p
        style={{
          fontSize: '36px',
          lineHeight: '43.57px',
          color: '#D53449',
          marginBottom: '20px',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Available Emergency Doctors
      </p>

      {user ? (
        doctors.map((doctor: IUser) => (
          <Container maxWidth="md">
            <Doctor key={doctor.id} user={doctor} /> <Divider />
          </Container>
        ))
      ) : (
        <h1>you have to signIn pro!</h1>
      )}
    </Container>
  );
};

export default Emergency;
