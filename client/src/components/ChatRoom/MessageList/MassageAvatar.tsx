import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IUser from '../../../Interfaces/post/IUser';
import IMassage from '../../../Interfaces/post/IMassage';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));
const MassageAvatar = ({ user }: { user: IUser | IMassage | undefined }) => {
  return (
    <NavLink
      style={{ width: '57px' }}
      to={`/users/${user?.id}`}
      className="user-info-post"
    >
      <Box display="flex">
        <Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar sx={{ width: '50px', height: '50px' }} src={user?.avatar} />
          </StyledBadge>
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-around"
        >
          <h3 style={{ paddingLeft: '10px', color: '#ffff' }}>
            {user?.name || user?.username}
          </h3>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: '10px', width: '60px' }}
          />
        </Box>
      </Box>
    </NavLink>
  );
};
export default MassageAvatar;
