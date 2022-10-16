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
const LikeItem = ({ like: { User } } : ILike) => (
  <div className="likeItem">
    <img src={User.avatar} alt="" />
    <h4>{User.name}</h4>
  </div>
);

export default LikeItem;
