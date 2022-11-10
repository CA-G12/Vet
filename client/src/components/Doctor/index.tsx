import Box from '@mui/material/Box';
import ButtonDoctor from './DoctorButton';
import UserAvatar from './UserAvatar';
import IUser from '../../Interfaces/post/IUser';

const Index = ({ user }: { user: IUser }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Box>
      <UserAvatar user={user} />
    </Box>
    <Box>
      <ButtonDoctor id={user.id} />
    </Box>
  </Box>
);
export default Index;
