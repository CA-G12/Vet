import { Box } from '@mui/system';
import INotification from '../../Interfaces/notification/INotification';
import Notification from './Notifcation';

const NotificationList = ({
  notifications,
}: {
  notifications: Array<INotification>;
}) => {
  return (
    <Box>
      {notifications.map((notification: INotification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </Box>
  );
};

export default NotificationList;
