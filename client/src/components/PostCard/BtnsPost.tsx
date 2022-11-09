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
import ILike from '../../Interfaces/post/ILike';
import ApiServices from '../../services/ApiService';

interface IBtnsPost {
  isConnected: boolean;
  numComments: number;
  setNumComments: Function;
  postId: number;
  showComments: boolean;
  getComments: Array<IComment>;
  setGetComments: Function;
  setIsConnected: Function;
  likes: Array<ILike>;
  setLikes: Function;
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
  setLikes,
  likes,
}: IBtnsPost) => {
  const { user, open, setOpen } = useContext(authContext);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const handleClick = () => {
    if (!user) {
      setOpen(!open);
    } else {
      setShowCommentInput(!showCommentInput);
      setIsConnected(true);
    }
  };
  const handelLike = async () => {
    if (user) {
      if (likes.some(like => like.User.id === user?.id)) {
        await ApiServices.destroy(`likes/${postId}`);
        setLikes(likes.filter(like => like.User.id !== user?.id));
      } else {
        const addLike = await ApiServices.post('likes', {
          PostId: postId,
        });
        setLikes([
          ...likes,
          {
            id: addLike.data.data.id,
            User: {
              id: user.id,
              avatar: user.avatar,
              role: 'USER',
              name: user.name,
            },
          },
        ]);
      }
    } else {
      setOpen(!open);
    }
  };

  return (
    <Box
      width="100%"
      sx={{
        position: 'relative',
        background: '#2d9b9b',
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
            <IconButton sx={{ width: '50%' }} onClick={handleClick}>
              <FontAwesomeIcon
                style={{ width: '100px', color: '#ffff' }}
                icon={faComment}
              />
            </IconButton>
          </label>
        </Tooltip>

        <IconButton sx={{ width: '50%' }} onClick={handelLike}>
          <PetsIcon
            sx={{
              color: !likes.some(like => like.User.id === user?.id)
                ? '#ffff'
                : '#FDD853',
            }}
          />
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
        position="absolute"
        sx={{
          width: '1px',
          height: '24px',
          background: 'red',
          left: '50%',
          top: '8px',
          backgroundColor: '#FDD853',
        }}
      />
    </Box>
  );
};

export default BtnsPost;
