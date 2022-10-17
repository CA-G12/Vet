import IComment from '../../Interfaces/post/IComment';
import UserCommentInfo from './UserCommentInfo';

const Comment = ({ comment }:{ comment: IComment}) => (
  <div className="comment-container">
    <div className="comment">
      <UserCommentInfo comment={comment} />
      <div className="content-comment">
        <p>{comment.comment}</p>
      </div>
    </div>
    { comment.image && <img src={comment.image} alt="" />}
  </div>

);

export default Comment;
