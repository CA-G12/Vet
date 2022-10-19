import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Comment from './Comment';
import IComment from '../../Interfaces/post/IComment';

const Comments = ({ comments }:{
  comments:Array<IComment>
  }) => (
    <div className="comments">
      {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      <div className="show-more">
        <p>
          Show More
        </p>
        <KeyboardDoubleArrowDownIcon />

      </div>

    </div>
);

export default Comments;
