import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageIcon from '@mui/icons-material/Image';
import Stack from '@mui/material/Stack';
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
  minWidth: '55%',
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
          alignSelf: 'flex-end',
          marginRight: '30px',
          borderRadius: '50px',
        }}
      >
        create post
      </Button>
      <Modal
        className="addPost"
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <form action="" onSubmit={handleSubmit}>
            <Box sx={style}>
              <Box sx={{ alignSelf: 'flex-start' }}>
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '90%',
                }}
              >
                <Stack direction="row" spacing={4}>
                  <label htmlFor="upload-photo">
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
                      sx={{ minWidth: 150, minHeight: '100%' }}
                      endIcon={<ImageIcon />}
                    >
                      add Image
                    </Button>
                  </label>
                  <BasicSelect name="TagId" options={TagList} />
                  <BasicSelect name="AnimalId" options={AnimalList} />
                </Stack>
                <LoadingButton
                  loading={progress > 0 && progress < 100}
                  type="submit"
                  variant="contained"
                  sx={{
                    width: 200,
                  }}
                >
                  Post
                </LoadingButton>
              </Box>
            </Box>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddPost;
