import Box from '@mui/material/Box';
import ConnectBtn from './ConnectBtn';
import EmergencyUserAvatar from './EmergencyUserAvatar';
import IUser from '../../Interfaces/post/IUser';

const Index = ({ user }: { user: IUser }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    width={{ xs: '100%', sm: '100%' }}
    marginTop="20px"
  >
    <Box>
      <EmergencyUserAvatar user={user} />
    </Box>
    <Box>
      <ConnectBtn id={user.id} />
    </Box>
  </Box>
);
export default Index;
