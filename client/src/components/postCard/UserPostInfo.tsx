import { NavLink } from 'react-router-dom';
import IPost from '../../Interfaces/post/Ipost';

const UserPostInfo = ({ post }:IPost) => (
  <NavLink to={`/users/${post.User.id}`} className="user-info-post">
    <img src={post.User.avatar} alt="" />
    <h4>{post.User.name}</h4>
  </NavLink>
);

export default UserPostInfo;
