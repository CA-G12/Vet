import IComment from '../../Interfaces/post/IComment';
import UserPostInfo from '../UserInfo';
import EditAndDeleteBtn from './EditAndDeleteBtn';

const Comment = ({ comment }: { comment: IComment }) => (
  <div className="comment-container abusluot-btns">
    <div className="comment">
      <UserPostInfo
        user={comment.User}
        style={{ dimensions: 30, alignItems: 'flex-start' }}
      />
      <div className="content-comment">
        <p>{comment.comment}</p>
      </div>
    </div>
    {comment.image && (
      <img className="comment-img" src={comment.image} alt="" />
    )}
    <EditAndDeleteBtn />
  </div>
);

export default Comment;
