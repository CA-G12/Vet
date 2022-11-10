import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageIcon from '@mui/icons-material/Image';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import { Container, Fab } from '@mui/material';
import uploadImage from '../../helpers/uploadImage';
import postSchema from '../../Validation/addPost';
import Username from '../UserInfo';
import BasicSelect from './BasicSelect';
import ITag from '../../Interfaces/post/ITag';
import IAddPost from '../../Interfaces/post/IAddPost';
import ApiServices from '../../services/ApiService';
import { authContext } from '../../hooks/useAuth';
import IPost from '../../Interfaces/post/IPost';

const AnimalList: ITag[] = [
  { id: 1, name: 'Cats' },
  { id: 2, name: 'Dogs' },
  { id: 3, name: 'Turtles' },
];

const TagList: ITag[] = [
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
  minWidth: { md: '55%', xs: '100vw', sm: '100vw' },
  maxWidth: { md: '100%', xs: '100vw', sm: '100vw' },
  minHeight: '55%',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const AddPost = ({
  posts,
  setPost,
}: {
  posts: Array<IPost>;
  setPost: Function;
}) => {
  const { user, setOpen } = React.useContext(authContext);
  const [openModal, setOpenModal] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [file, setFile] = React.useState<File | null>(null);
  const handleClose = () => setOpenModal(false);
  React.useEffect(() => {
    if (progress === 100) handleClose();
  }, [progress]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleOpen = () => {
    if (user) {
      setOpenModal(true);
    } else {
      setOpen(true);
      toast.error('you have to be logged in to post');
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
    e.preventDefault();
    try {
      const validated = await postSchema.validate(formData);
      let imageUrl = '';
      if (file) {
        imageUrl = await uploadImage(file, setProgress);
      }

      const postData: IAddPost = {
        ...validated,
        UserId: user?.id,
        image: imageUrl,
      };

      const newPost = await ApiServices.post('/posts', postData);
      setPost([newPost.data.data[0], ...posts]);

      toast.success('new post added successfully');
      handleClose();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="contained"
        sx={{
          display: { sm: 'none', xs: 'none', md: 'inline-flex' },
          borderRadius: '50px',
        }}
      >
        create post
      </Button>

      <Fab
        onClick={handleOpen}
        color="secondary"
        sx={{
          display: { sm: 'inline-flex', xs: 'inline-flex', md: 'none' },
          position: 'fixed',
          bottom: '30px',
          right: '30px',
        }}
      >
        <CreateIcon />
      </Fab>

      <Modal
        className="addPost"
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="md">
          <form action="" onSubmit={handleSubmit}>
            <Box sx={style} id="form-body">
              <Box sx={{ alignSelf: 'flex-start' }} id="username">
                {user && (
                  <Username
                    user={{ id: user.id, name: user.name, avatar: user.avatar }}
                  />
                )}
              </Box>
              <TextareaAutosize
                name="content"
                aria-label="empty textarea"
                placeholder="What is going on?"
                style={{
                  width: '85%',
                  minHeight: '40%',
                  fontSize: 16,
                  padding: '2rem',
                  borderStyle: 'none',
                  backgroundColor: '#EFF2F2',
                }}
              />
              <Stack
                id="allBtns"
                sx={{ width: '80%' }}
                direction={{ md: 'row', sm: 'row', xs: 'column' }}
                justifyContent="space-between"
                spacing={{ md: 4, sm: 1, xs: 1 }}
              >
                <Stack direction="row" spacing={1}>
                  <BasicSelect name="TagId" options={TagList} />
                  <BasicSelect name="AnimalId" options={AnimalList} />
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <label htmlFor="upload-photo" id="imageBtn">
                    <input
                      type="file"
                      accept="/image/*"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      id="upload-photo"
                      name="upload-photo"
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      sx={{ minHeight: '100%', width: '100%' }}
                      endIcon={<ImageIcon />}
                    >
                      Image
                    </Button>
                  </label>

                  <LoadingButton
                    loading={progress > 0 && progress < 100}
                    type="submit"
                    sx={{ minHeight: '100%', minWidth: '50%' }}
                    variant="contained"
                  >
                    Post
                  </LoadingButton>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Container>
      </Modal>
    </>
  );
};
export default AddPost;
