import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Comment from './Comment';
import IComment from '../../Interfaces/post/IComment';

const Comments = ({ comments, showMore }:{
  comments:Array<IComment>, showMore:Function
  }) => (
    <div className="comments">
      {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      <div className="show-more">
        <p
          role="presentation"
          onClick={() => showMore()}
        >
          Show More
        </p>
        <KeyboardDoubleArrowDownIcon />

      </div>

    </div>
);

export default Comments;
