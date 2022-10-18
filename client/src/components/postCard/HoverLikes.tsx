import LikeItem from './LikeItem';
import ILike from '../../Interfaces/post/ILike';

const HoverLikes = ({ likes }:{likes:Array<ILike>}) => (
  <div className="whoLike">
    {likes.map((liked:ILike) => <LikeItem key={liked.id} like={liked} />)}
  </div>
);

export default HoverLikes;
