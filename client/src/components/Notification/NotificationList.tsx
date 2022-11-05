import { Menu } from '@mui/material';
import INotification from '../../Interfaces/notification/INotification';
import Notification from './Notifcation';

const NotificationList = ({
  notifications,
  open,
  anchorEl,
  setAnchorEl,
}: {
  notifications: Array<INotification>;
  open: boolean;
  anchorEl: any;
  setAnchorEl: Function;
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {' '}
      {notifications.map((notification: INotification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </Menu>
  );
};

export default NotificationList;
