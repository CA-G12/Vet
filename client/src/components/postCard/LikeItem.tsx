import { NavLink } from 'react-router-dom';

interface User{
  id:number
  name:string
  avatar:string
}
interface ILike{
  like: {
    id:number
    User:User
  }
}
const LikeItem = ({ like: { id, User } } : ILike) => (
  <NavLink to={`/users/${id}`} className="likeItem">
    <img src={User.avatar} alt="" />
    <h4>{User.name}</h4>
  </NavLink>

);

export default LikeItem;
