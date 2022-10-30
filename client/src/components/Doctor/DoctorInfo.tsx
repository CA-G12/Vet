import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import IUser from '../../Interfaces/post/IUser';

const UserPostInfo = ({ user }: { user: IUser | null | undefined }) => (
  <NavLink to={`/users/${user?.id}`} className="user-info-post">
    <Box display="flex">
      <Avatar
        sx={{ width: '60px', height: '60px' }}
        alt={user?.name}
        src={user?.avatar}
      />
      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="space-around"
      >
        <h3 style={{ paddingLeft: '10px' }}>{user?.name}</h3>
        <span style={{ paddingLeft: '10px', color: '#2D9B9B' }}>
          {user?.DoctorInfo?.workplace}
        </span>
      </Box>
    </Box>
  </NavLink>
);
export default UserPostInfo;
