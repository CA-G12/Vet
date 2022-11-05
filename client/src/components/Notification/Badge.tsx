import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import INotification from '../../Interfaces/notification/INotification';

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
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={notifications.length} color="secondary">
        <NotificationsIcon />
      </StyledBadge>
    </IconButton>
  );
};
export default NotificationBadge;
