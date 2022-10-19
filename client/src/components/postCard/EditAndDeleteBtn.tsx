import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import useOutsideClick from '../hooks/UseOutsideClick ';

const EditAndDeleteBtn = () => {
  const [open, setOpen] = useState(false);

  const handleClickOutside = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div ref={ref} className="Edit-and-deleteBtn">
      <button className="dots-btn" type="submit" onClick={handleClick}>
        <ListItemIcon className="dots-icon">
          <MoreHorizIcon />
        </ListItemIcon>
      </button>
      <Collapse className="btns-container" in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className="btns-list" sx={{ pl: 4 }}>
            <IconButton>
              <EditIcon />
              <ListItemText primary="Edit" />
            </IconButton>

          </ListItemButton>
          <ListItemButton className="btns-list" sx={{ pl: 4 }}>
            <IconButton>
              <DeleteIcon />
              <ListItemText primary="Delete" />
            </IconButton>

          </ListItemButton>
        </List>
      </Collapse>

      {/*
      */}
    </div>
  );
};

export default EditAndDeleteBtn;
