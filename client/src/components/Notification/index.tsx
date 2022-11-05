import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/UseAuthar';
import { useNotifications } from '../../hooks/useNotifications';
import NotificationBadge from './Badge';
import NotificationList from './NotificationList';

const Nndex = () => {
  const { user } = useAuth();
  const params = useParams();

  const notifications = useNotifications(`${user?.id}`, params?.id);

  return (
    <Box>
      <NotificationBadge notifications={notifications} />
      <NotificationList notifications={notifications} />
    </Box>
  );
};

export default Nndex;
