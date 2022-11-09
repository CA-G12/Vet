import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Like from '../../Interfaces/post/ILike';
import HoverWhoLikes from './HoverWhoLikes';

interface ICommentsAndLikesNum {
  commentNum: number;
  likes: Array<Like>;
  handleClick: Function;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    color: '#356E6E',
    background: '#FDD853',
    fontSize: '10px',
    width: '5px',
    marginTop: '8px',
  },
}));

const StackCommentsAndLikes = ({
  commentNum,
  likes,
  handleClick,
}: ICommentsAndLikesNum) => (
  <Stack
    spacing={2}
    direction="row"
    display="flex"
    justifyContent="start"
    alignItems="center"
    className="comments-likes-btn"
  >
    <StyledBadge
      onClick={() => {
        handleClick();
      }}
      badgeContent={commentNum}
      role="presentation"
    >
      <Tooltip title="Show Comments">
        <FontAwesomeIcon
          style={{ fontSize: '20px', marginTop: '2px', color: '#2D9B9B' }}
          icon={faComment}
        />
      </Tooltip>
    </StyledBadge>
    <HoverWhoLikes likes={likes} />
  </Stack>
);

export default StackCommentsAndLikes;
