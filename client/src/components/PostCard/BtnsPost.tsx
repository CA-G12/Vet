import { useContext, useState } from 'react';

import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Box } from '@mui/system';
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
  const { user, open, setOpen } = useContext(authContext);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const handleClick = () => {
    setShowCommentInput(!showCommentInput);
    setIsConnected(true);
  };

  return (
    <Box
      width="100%"
      sx={{
        position: 'relative',
        background: '#2D9B9B',
        borderRadius: !isConnected ? '0 0 12px 12px' : 0,
      }}
    >
      <Box
        width="100%"
        sx={{ borderRadius: isConnected ? '0' : '0 0 10px 10px' }}
      >
        <Tooltip title="Add new comment">
          <label htmlFor="add-comment-btn">
            {' '}
            <IconButton
              sx={{ width: '50%' }}
              className="comment-btn"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faComment} />
            </IconButton>
          </label>
        </Tooltip>

        <IconButton sx={{ width: '50%' }}>
          <PetsIcon />
        </IconButton>
      </Box>
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
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          height: '20px',
          width: '1px',
          top: '10px',
          background: '#FDD853',
          zIndex: 15,
        }}
      />
      {showCommentInput && !user && <PopUp open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default BtnsPost;
