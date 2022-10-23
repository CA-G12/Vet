import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import User from '../../Interfaces/post/IUser';

const UserPostInfo = ({ user }:{user:User}) => (
  <NavLink to={`/users/${user.id}`} className="user-info-post">
    <div style={{ display: 'flex' }}>
      <Avatar alt={user.name} src={user.avatar} />
      <span style={{ alignSelf: 'center', paddingLeft: '10px' }}>
        {user.name}
      </span>
    </div>
  </NavLink>
);

export default UserPostInfo;
