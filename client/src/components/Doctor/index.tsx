import Box from '@mui/material/Box';
import ButtonDoctor from './DoctorButton';
import UserAvatar from './UserAvatar';
import IUser from '../../Interfaces/post/IUser';

const Index = ({ user }: { user: IUser }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    sx={{ width: '80%', marginTop: '20px' }}
  >
    <Box>
      <UserAvatar user={user} />
    </Box>
    <Box>
      <ButtonDoctor id={user.id} />
    </Box>
  </Box>
);
export default Index;
