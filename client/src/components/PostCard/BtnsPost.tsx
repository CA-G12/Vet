import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import AddInputComment from './AddInputComment';
import useOutsideClick from '../../hooks/UseOutsideClick ';

const BtnsPost = ({
  isConnected, setIsConnected, numComments, setNumComments, postId,
}:{isConnected:boolean, numComments:number, setNumComments:Function,
  postId:number,

   setIsConnected:Function}) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const handleClick = () => {
    setShowCommentInput(!showCommentInput);
    setIsConnected(true);
  };
  const handleClickOutside = () => {
    setShowCommentInput(false);
  };
  const ref = useOutsideClick(handleClickOutside);
  return (
    <div ref={ref}>
      <div style={{ borderRadius: isConnected ? '0' : '0 0 10px 10px' }} className="BtnsPost">
        <Tooltip title="Add new comment">
          <label htmlFor="add-comment-btn">
            {' '}
            <IconButton className="comment-btn" onClick={handleClick}>
              <FontAwesomeIcon icon={faComment} />
            </IconButton>

          </label>

        </Tooltip>

        <IconButton>
          <PetsIcon />
        </IconButton>
      </div>
      {showCommentInput && (
      <AddInputComment
        numComments={numComments}
        setNumComments={setNumComments}
        postId={postId}
      />
      )}
    </div>
  );
};

export default BtnsPost;
