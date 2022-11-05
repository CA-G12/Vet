import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const AvatarNotification = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => (
  <Box display="flex" alignItems="center" p="10px">
    <Avatar alt={name} src={image} />
    <Box display="flex" flexDirection="column">
      <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{name}</span>
      <span style={{ fontSize: '12px' }}> I want to connect with you!</span>
    </Box>
  </Box>
);
export default AvatarNotification;
