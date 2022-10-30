import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import AddInputComment from './AddInputComment';
import IComment from '../../Interfaces/post/IComment';
import { authContext } from '../../hooks/useAuth';
import PopUp from '../Popup/Popup';

interface IBtnsPost {
  isConnected: boolean;
  numComments: number;
  setNumComments: Function;
  postId: number;
  showComments: boolean;
  getComments: Array<IComment>;
  setGetComments: Function;
  setIsConnected: Function;
}

const BtnsPost = ({
  isConnected,
  setIsConnected,
  numComments,
  setNumComments,
  postId,
  showComments,
  getComments,
  setGetComments,
}: IBtnsPost) => {
  const { user } = useContext(authContext);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const handleClick = () => {
    console.log('hi');
    setShowCommentInput(!showCommentInput);
    setIsConnected(true);
  };

  return (
    <div>
      <div
        style={{ borderRadius: isConnected ? '0' : '0 0 10px 10px' }}
        className="BtnsPost"
      >
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
      {showCommentInput && user && (
        <AddInputComment
          numComments={numComments}
          setNumComments={setNumComments}
          postId={postId}
          showComments={showComments}
          getComments={getComments}
          setGetComments={setGetComments}
          setShowCommentInput={setShowCommentInput}
        />
      )}
      {showCommentInput && !user && <PopUp />}
    </div>
  );
};

export default BtnsPost;
