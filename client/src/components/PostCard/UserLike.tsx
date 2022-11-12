import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';

const UserLike = ({
  id,
  name,
  avatar,
}: {
  id: number;
  name: string;
  avatar: string;
}) => (
  <NavLink style={{ textDecoration: 'none', width: 0 }} to={`/users/${id}`}>
    <Stack marginTop="10px" alignItems="center" direction="row">
      <Avatar sx={{ width: 24, height: 24 }} alt={name} src={avatar} />
      <span style={{ alignSelf: 'center', paddingLeft: '10px' }}>{name}</span>
    </Stack>
  </NavLink>
);
export default UserLike;
