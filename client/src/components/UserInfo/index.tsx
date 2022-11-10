import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import IUser from '../../Interfaces/post/IUser';

const UserPostInfo = ({ user }: { user: Partial<IUser> | undefined }) => (
  <NavLink
    style={{
      textDecoration: 'none',
      width: 0,
      color: '#4f6666',
    }}
    to={`/users/${user?.id}`}
    className="user-info-post"
  >
    <Stack justifyContent="flex-start" alignItems="center" direction="row">
      <Avatar alt={user?.name} src={user?.avatar} />
      <Typography
        color="primary"
        sx={{ alignSelf: 'center', paddingLeft: '10px' }}
        variant="h5"
        gutterBottom
      >
        {user?.name}
      </Typography>
    </Stack>
  </NavLink>
);
export default UserPostInfo;
