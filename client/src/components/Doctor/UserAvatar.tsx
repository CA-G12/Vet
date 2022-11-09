import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import IUser from '../../Interfaces/post/IUser';

const UserAvatar = ({ user }: { user: IUser | null | undefined }) => {
  return (
    <NavLink to={`/users/${user?.id}`} className="user-info-post">
      <Box display="flex">
        <Box>
          <Avatar
            sx={{ width: '50px', height: '50px' }}
            alt={user?.name}
            src={user?.avatar}
          />
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-around"
        >
          <h3 style={{ paddingLeft: '10px' }}>{user?.name}</h3>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: '10px', width: '60px' }}
          >
            <p style={{ color: '#2D9B9B', paddingLeft: '5px' }}>
              {user?.Doctor?.workplace}
            </p>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};
export default UserAvatar;
