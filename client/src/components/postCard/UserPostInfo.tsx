import { NavLink } from 'react-router-dom';
import IPost from '../../Interfaces/post/Ipost';

const UserPostInfo = ({ post }:IPost) => (
  <NavLink to={`/users/${post.User.id}`} className="user-info-post">
    <img src={post.User.avatar} alt="" />
    <h3>{post.User.name}</h3>
  </NavLink>
);

export default UserPostInfo;
