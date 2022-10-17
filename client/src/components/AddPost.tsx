import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import BasicSelect from './BasicSelect';
import './BasicSelect.css';

// import Animal from '../interfaces/Animal';
// import Tag from '../interfaces/Tag';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 825,
  minHeight: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 650, height: 241 }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Button variant="outlined">placeholder</Button>
          </Typography>
          <Typography id="modal-modal-description">
            <Button variant="outlined">add Image</Button>
            <BasicSelect name="Tag" obj={[{ id: 1, name: 'hi' }]} />
            <BasicSelect name="Animal" obj={[{ id: 1, name: 'hi' }]} />

            <Button
              variant="contained"
              sx={{
                width: 100,
                backgroundColor: '#2D9B9B',
              }}
            >
              Post

            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default AddPost;
