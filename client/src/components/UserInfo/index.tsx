import { NavLink } from 'react-router-dom';
import User from '../../Interfaces/post/IUser';

const UserPostInfo = ({
  user,
  style,
}: {
  user: User;
  style: {
    dimensions: number;
    alignItems: string;
  };
}) => (
  <NavLink
    style={{ alignItems: style.alignItems }}
    to={`/users/${user.id}`}
    className="user-info-post"
  >
    <img
      style={{ width: style.dimensions, height: style.dimensions }}
      src={user.avatar}
      alt=""
    />
    <h4>{user.name}</h4>
  </NavLink>
);

export default UserPostInfo;
