import Box from '@mui/material/Box';
import ButtonDoctor from './DoctorButton';
import UserPostInfo from './DoctorInfo';
import IUser from '../../Interfaces/post/IUser';

const Index = ({
  user,
  isEmergency,
}: {
  user: IUser;
  isEmergency: boolean;
}) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    sx={{ width: '80%', marginTop: '20px' }}
  >
    <Box>
      <UserPostInfo isEmergency={isEmergency} user={user} />
    </Box>
    <Box>
      <ButtonDoctor isEmergency={isEmergency} id={user.id} />
    </Box>
  </Box>
);
export default Index;
