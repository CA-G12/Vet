/* eslint-disable react/require-default-props */
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { Stack } from '@mui/system';
import useOutsideClick from '../../hooks/UseOutsideClick';
import ApiServices from '../../services/ApiService';
import IPost from '../../Interfaces/post/IPost';

interface ICommentIdAndPostId {
  postId?: number;
  deleteData?: Array<IPost>;
  deleteCallback?: Function;
  setEdit?: Function;
  edit?: boolean;
}

const EditAndDeleteBtn = ({
  postId,
  deleteData,
  deleteCallback,
  setEdit,
  edit,
}: ICommentIdAndPostId) => {
  const [open, setOpen] = useState(false);

  const handleClickOutside = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const deleteComment = async () => {
    setOpen(false);

    const url = `post/${postId}`;

    await ApiServices.destroy(url).then(() => {
      if (deleteCallback) {
        deleteCallback(deleteData?.filter(item => item.id !== postId));
      }
    });
  };
  const handelEdit = () => {
    setOpen(false);

    if (setEdit) {
      setEdit(!edit);
    }
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <Stack
      sx={{ minWidth: '0px', width: '10px', zIndex: 5 }}
      display="flex"
      position="absolute"
      right="0px"
      ref={ref}
    >
      <Button sx={{ minWidth: '0' }} type="submit" onClick={handleClick}>
        <ListItemIcon>
          <MoreHorizIcon sx={{ color: '#121212' }} />
        </ListItemIcon>
      </Button>
      <Collapse
        className="btns-container"
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List
          sx={{
            position: 'absolute',
            zIndex: '5',
            right: '10px',
            background: 'rgb(239 242 242)',
          }}
          component="div"
          disablePadding
        >
          <ListItemButton className="btns-list" sx={{ pl: 0 }}>
            <Button sx={{ width: '100%' }} onClick={handelEdit}>
              <EditIcon />
              <ListItemText primary="Edit" />
            </Button>
          </ListItemButton>
          <ListItemButton className="btns-list" sx={{ pl: 0 }}>
            <Button onClick={deleteComment}>
              <DeleteIcon />
              <ListItemText primary="Delete" />
            </Button>
          </ListItemButton>
        </List>
      </Collapse>

      {/*
       */}
    </Stack>
  );
};

export default EditAndDeleteBtn;
