import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ImageIcon from '@mui/icons-material/Image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BasicSelect from './BasicSelect';
import Animal from '../interfaces/Animal';
import Tag from '../interfaces/Tag';

const theme = createTheme({
  palette: {
    primary: {
      light: '#66cccc',
      main: '#2D9B9B',
      dark: '#006c6d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6a74',
      main: '#d53449',
      dark: '#9e0022',
      contrastText: '#fff',
    },
  },
});

const AnimalList:Animal[] = [
  { id: 1, name: 'Cats' },
  { id: 2, name: 'Dogs' },
  { id: 3, name: 'Turtles' },

];

const TagList:Tag[] = [
  { id: 1, name: 'Need help' },
  { id: 2, name: 'Advise' },
  { id: 3, name: 'Up for adoption' },
  { id: 4, name: 'Memes' },
  { id: 5, name: 'Up for sale' },
];
const style = {
  position: 'absolute' as 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '55%',
  minHeight: '55%',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>

      <div>
        <Button onClick={handleOpen}>Add post</Button>
        <Modal
          className="addPost"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" />
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="What is going on?"
              style={{
                width: '90%', minHeight: '40%', fontSize: 16, padding: '2rem', borderStyle: 'none', backgroundColor: '#EFF2F2',
              }}
            />
            <Box
              id="modal-modal-description"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '60%',
              }}
              >
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <Button variant="outlined" component="span" sx={{ minWidth: 150, minHeight: '100%' }}>
                    add Image
                    <ImageIcon />
                  </Button>
                </label>
                <BasicSelect name="Tag" obj={TagList} />
                <BasicSelect name="Animal" obj={AnimalList} />
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: 200,
                }}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
export default AddPost;
