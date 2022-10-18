import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import AddInputComment from './AddInputComment';
import useOutsideClick from '../hooks/UseOutsideClick ';

const BtnsPost = ({ isConnected, setIsConnected }:{isConnected:boolean,
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
              <i className="fa-solid fa-comment" />
            </IconButton>

          </label>

        </Tooltip>

        <IconButton>
          <PetsIcon />
        </IconButton>
      </div>
      {showCommentInput && <AddInputComment />}
    </div>
  );
};

export default BtnsPost;
