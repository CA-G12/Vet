import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import IUser from '../../Interfaces/post/IUser';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const EmergencyUserAvatar = ({
  user,
}: {
  user: IUser & {
    workplace?: string;
  };
}) => {
  return (
    <NavLink
      style={{ textDecoration: 'none' }}
      to={`/users/${user?.id}`}
      className="user-info-post"
    >
      <Box display="flex" alignItems="center">
        <Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              sx={{ width: '50px', height: '50px' }}
              alt={user?.name}
              src={user?.avatar}
            />
          </StyledBadge>
        </Box>
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Typography
            color="primary"
            paddingLeft="10px"
            variant="h6"
            gutterBottom
          >
            {user?.name}{' '}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '60px' }}
          >
            <Typography
              color="primary"
              paddingLeft="10px"
              variant="subtitle2"
              gutterBottom
              display="flex"
              alignItems="center"
            >
              <FmdGoodIcon />
              {user?.workplace}
            </Typography>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};
export default EmergencyUserAvatar;
