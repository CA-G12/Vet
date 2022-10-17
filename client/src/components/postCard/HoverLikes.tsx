import LikeItem from './LikeItem';

interface Like{
  id:number
  User:User
}
interface User{
  id:number
  name:string
  avatar:string
}
interface props{
  likes:Array<Like>
}
const HoverLikes = ({ likes }:props) => (
  <div className="whoLike">
    {likes.map((liked:Like) => <LikeItem key={liked.id} like={liked} />)}
  </div>
);

export default HoverLikes;
