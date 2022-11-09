import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import HoverLikes from './HoverLikes';
import ILike from '../../Interfaces/post/ILike';

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
const HoverWhoLikes = ({ likes }: { likes: Array<ILike> }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
        >
          <StyledBadge badgeContent={likes.length} className="likesNum">
            <PetsIcon />
          </StyledBadge>
        </Typography>
      </IconButton>{' '}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography>
          {' '}
          <Typography sx={{ p: 1 }}>
            {' '}
            <HoverLikes likes={likes} />
          </Typography>
        </Typography>
      </Popover>
    </Box>
  );
};
export default HoverWhoLikes;
