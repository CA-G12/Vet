import IComment from '../../Interfaces/post/IComment';
import UserPostInfo from '../UserInfo';
import EditAndDeleteBtn from './EditAndDeleteBtn';

const Comment = ({ comment }:{ comment: IComment}) => (
  <div className="comment-container abusluot-btns">
    <div className="comment">
      <UserPostInfo user={comment.User} />
      <div className="content-comment">
        <p>{comment.comment}</p>
      </div>
    </div>
    { comment.image && <img src={comment.image} alt="" />}
    <EditAndDeleteBtn />
  </div>

);

export default Comment;
