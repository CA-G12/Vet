import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';

const BtnsPost = () => (
  <div className="BtnsPost">
    <Tooltip title="Add new comment">
      <IconButton>
        <i className="fa-solid fa-comment" />
      </IconButton>
    </Tooltip>

    <IconButton>
      <PetsIcon />
    </IconButton>
  </div>
);

export default BtnsPost;
