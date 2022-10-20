import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageIcon from '@mui/icons-material/Image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import postSchema from '../../Validation/addPost';
import iPost from '../../Interfaces/Post';
import Username from './Username';
import BasicSelect from './BasicSelect';
import Animal from '../../Interfaces/Animal';
import Tag from '../../Interfaces/Tag';

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
  justifyContent: 'space-around',
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
  const [postData, setPostData] = React.useState<iPost>({
    content: '',
    image: '',
    TagId: 0,
    AnimalId: 0,
  });

  const handleStateTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setPostData((prev:iPost) => ({ ...prev, [name]: value }));
  };
  return (

    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Add post</Button>
      <Modal
        className="addPost"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              postSchema.validate(postData)
                .then(() => {
                  toast.success('New post added successfully');
                })
                .catch((err:any) => {
                  toast.error(err.message);
                });
            }}
          >
            <Box sx={style}>
              <Box sx={{ alignSelf: 'flex-start' }}>
                <Username name="Aseel" avatar="my image" />
              </Box>
              <TextareaAutosize
                name="content"
                onChange={handleStateTextarea}
                aria-label="empty textarea"
                placeholder="What is going on?"
                style={{
                  width: '85%', minHeight: '40%', fontSize: 16, padding: '2rem', borderStyle: 'none', backgroundColor: '#EFF2F2',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '90%',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
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
                    <Button variant="outlined" component="span" sx={{ minWidth: 150, minHeight: '100%' }} endIcon={<ImageIcon />}>
                      add Image
                    </Button>
                  </label>
                  <BasicSelect
                    id={postData}
                    name="Tag"
                    itemId="TagId"
                    obj={TagList}
                    callback={setPostData}
                  />
                  <BasicSelect
                    id={postData}
                    name="Animal"
                    itemId="AnimalId"
                    obj={AnimalList}
                    callback={setPostData}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: 200,
                  }}
                >
                  Post
                </Button>
              </Box>
            </Box>
          </form>
        </div>
      </Modal>
    </ThemeProvider>
  );
};
export default AddPost;
