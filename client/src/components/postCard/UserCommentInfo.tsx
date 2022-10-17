import { NavLink } from 'react-router-dom';
import IComment from '../../Interfaces/post/IComment';

const UserCommentInfo = ({ comment }:{comment : IComment}) => (
  <NavLink to={`/users/${comment.User.id}`} className="user-info-comment">
    <img src={comment.User.avatar} alt="" />
    <h4>{comment.User.name}</h4>
  </NavLink>
);

export default UserCommentInfo;
