import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const BtnsPost = () => (
  <div className="BtnsPost">
    <IconButton>
      <i className="fa-solid fa-comment" />
    </IconButton>
    <IconButton>
      <PetsIcon />
    </IconButton>
  </div>
);

export default BtnsPost;
