import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Comment from './Comment';
import IComment from '../../Interfaces/post/IComment';
import LoadingComments from './LoadingComment';

interface IComments
  {
    comments:Array<IComment>,
     showMore:Function,
      commentNum:number,
      isShowMore:boolean
    }

const Comments = ({
  comments, showMore, commentNum, isShowMore,
}:IComments) => (
  <div className="comments">
    {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    {isShowMore && <LoadingComments />}

    {commentNum > comments.length && (
      <div className="show-more">
        <p
          role="presentation"
          onClick={() => showMore()}
        >
          Show More
        </p>
        <KeyboardDoubleArrowDownIcon />
      </div>

    )}

  </div>
);

export default Comments;
