import { useContext, useState } from 'react';

import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

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
    <div>
      <div
        style={{ borderRadius: isConnected ? '0' : '0 0 10px 10px' }}
        className="BtnsPost"
      >
        <Tooltip title="Add new comment">
          <label htmlFor="add-comment-btn">
            {' '}
            <IconButton className="comment-btn" onClick={handleClick}>
              <FontAwesomeIcon
                style={{ width: '100px', color: '#ffff' }}
                icon={faComment}
              />
            </IconButton>
          </label>
        </Tooltip>

        <IconButton onClick={handelLike}>
          <PetsIcon
            sx={{
              color: !likes.some(like => like.User.id === user?.id)
                ? '#ffff'
                : '#FDD853',
            }}
          />
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
    </div>
  );
};

export default BtnsPost;
