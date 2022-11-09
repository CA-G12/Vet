import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';

const UserPostInfo = ({
  id,
  name,
  avatar,
}: {
  id: number;
  name: string;
  avatar: string;
}) => (
  <NavLink
    style={{
      textDecoration: 'none',
      width: 0,
      color: '#4f6666',
    }}
    to={`/users/${id}`}
    className="user-info-post"
  >
    <Stack justifyContent="flex-start" alignItems="center" direction="row">
      <Avatar alt={name} src={avatar} />
      <Typography
        color="primary"
        sx={{ alignSelf: 'center', paddingLeft: '10px' }}
        variant="h5"
        gutterBottom
      >
        {name}{' '}
      </Typography>
    </Stack>
  </NavLink>
);
export default UserPostInfo;
