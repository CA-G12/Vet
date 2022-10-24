import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageIcon from '@mui/icons-material/Image';
import postSchema from '../../Validation/addPost';
import Username from '../UserInfo';
import BasicSelect from './BasicSelect';
import ITag from '../../Interfaces/post/ITag';
import IAddPost from '../../Interfaces/post/IAddPost';
import ApiServices from '../../services/ApiService';

const AnimalList:ITag[] = [
  { id: 1, name: 'Cats' },
  { id: 2, name: 'Dogs' },
  { id: 3, name: 'Turtles' },

];

const TagList:ITag[] = [
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
  const [postData, setPostData] = React.useState<IAddPost>({
    UserId: 1,
    content: '',
    image: '',
    TagId: 0,
    AnimalId: 0,
  });

  const handleClick = async () => {
    ApiServices.init();
    try {
      const result = await ApiServices.post('/posts', postData);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStateTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setPostData((prev:IAddPost) => ({ ...prev, [name]: value }));
  };
  return (
    <>
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
                  handleClick();
                })
                .then(() => {
                  toast.success('New post added successfully');
                  handleClose();
                })
                .catch((err:any) => {
                  toast.error(err.message);
                });
            }}
          >
            <Box sx={style}>
              <Box sx={{ alignSelf: 'flex-start' }}>
                <Username user={{
                  name: 'Kakashi',
                  avatar: 'https://media.tenor.com/fR49OunP59UAAAAC/killua-killua-zoldyck.gif',
                  id: 1,
                  role: 'user',
                }}
                />
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
                    post={postData}
                    name="Tag"
                    itemId="TagId"
                    obj={TagList}
                    callback={setPostData}
                  />
                  <BasicSelect
                    post={postData}
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
    </>

  );
};
export default AddPost;
