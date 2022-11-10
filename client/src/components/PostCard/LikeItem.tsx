import { NavLink } from 'react-router-dom';
import ILike from '../../Interfaces/post/ILike';

const LikeItem = ({ like: { id, User } }: { like: ILike }) => (
  <NavLink to={`/users/${id}`}>
    <img src={User.avatar} alt="" />
    <h4>{User.name}</h4>
  </NavLink>
);

export default LikeItem;
