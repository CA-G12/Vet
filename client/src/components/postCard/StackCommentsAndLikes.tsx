import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';
import Like from '../../Interfaces/post/ILike';
import HoverLikes from './HoverLikes';

interface CommentsAndLikesNum{
  commentNum:number,
   likes:Array<Like>
   handleClick:Function
}
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
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

const StackCommentsAndLikes = ({ commentNum, likes, handleClick }:CommentsAndLikesNum) => (
  <Stack spacing={2} direction="row" className="comments-likes-btn">
    <StyledBadge
      onClick={() => handleClick()}
      badgeContent={commentNum}
      role="presentation"
    >

      <Tooltip title="Show Comments">

        <i className="fa-solid fa-comment" />
      </Tooltip>

    </StyledBadge>

    <StyledBadge badgeContent={likes.length} className="likesNum">
      <PetsIcon />
      {' '}

      <HoverLikes likes={likes} />
    </StyledBadge>
  </Stack>
);

export default StackCommentsAndLikes;
