import IComment from '../../Interfaces/post/IComment';
import UserPostInfo from '../UserInfo';
import EditAndDeleteBtn from './EditAndDeleteBtn';

const Comment = ({
  comment, comments, setGetComments, numComments, setNumComments,
}:
  { comment: IComment, comments:Array<IComment>, setGetComments:Function, numComments:number
    setNumComments:Function
  }) => {
  const user = {
    id: 1,
  };

  return (
    <div className="comment-container abusluot-btns">
      <div className="comment">
        <UserPostInfo user={comment.User} style={{ dimensions: 30, alignItems: 'flex-start' }} />
        <div className="content-comment">
          <p>{comment.comment}</p>
        </div>
      </div>
      { comment.image && <img className="comment-img" src={comment.image} alt="" />}
      {
user.id === comment.User.id

      && (
      <EditAndDeleteBtn
        deleteData={comments}
        deleteCallback={setGetComments}
        commentId={comment.id}
        postId={comment.PostId}
        numComments={numComments}
        setNumComments={setNumComments}
      />
      )
}
    </div>

  );
};

export default Comment;
