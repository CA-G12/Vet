import { Box } from '@mui/system';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NotificationList from './NotificationList';
import NotificationBadge from './Badge';
import { useNotifications } from '../../hooks/useNotifications';
import { useAuth } from '../../hooks/UseAuthar';

const Notifications = () => {
  const { user } = useAuth();

  const notifications = useNotifications(`${user?.id}`);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        textAlign="center"
        position="absolute"
        right="20px"
      >
        <Tooltip title="Notification">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <NotificationBadge notifications={notifications} />
          </IconButton>
        </Tooltip>
      </Box>

      <NotificationList
        open={open}
        anchorEl={anchorEl}
        notifications={notifications}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
export default Notifications;
