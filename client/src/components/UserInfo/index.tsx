import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';

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
    style={{ textDecoration: 'none', width: 0 }}
    to={`/users/${id}`}
    className="user-info-post"
  >
    <Stack justifyContent="flex-start" alignItems="center" direction="row">
      <Avatar alt={name} src={avatar} />
      <span style={{ alignSelf: 'center', paddingLeft: '10px' }}>{name}</span>
    </Stack>
  </NavLink>
);
export default UserPostInfo;
