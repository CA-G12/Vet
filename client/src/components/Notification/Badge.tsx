import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import INotification from '../../Interfaces/notification/INotification';

const NotificationBadge = ({
  notifications,
}: {
  notifications: Array<INotification>;
}) => {
  return (
    <Badge badgeContent={notifications.length} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
};
export default NotificationBadge;
