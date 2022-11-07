import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import INotification from '../../Interfaces/notification/INotification';
import { deleteNotification } from '../../helpers/DeleteNotification';
import { useAuth } from '../../hooks/UseAuthar';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 2,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NotificationBadge = ({
  notifications,
}: {
  notifications: Array<INotification>;
}) => {
  const params = useParams();
  const { user } = useAuth();
  useEffect(() => {
    notifications.forEach(notification => {
      if (params.id === `${notification.uid}`) {
        deleteNotification(user?.id, notification.id);
      }
    });
  }, [params, user?.id, notifications]);
  return (
    <StyledBadge badgeContent={notifications.length} color="secondary">
      <NotificationsIcon />
    </StyledBadge>
  );
};
export default NotificationBadge;
