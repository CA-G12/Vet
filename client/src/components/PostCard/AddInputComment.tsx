/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import HideImageIcon from '@mui/icons-material/HideImage';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { toast } from 'react-toastify';
import { Box, Stack } from '@mui/system';
import { Button } from '@mui/material';
import ApiServices from '../../services/ApiService';
import deleteImageFromStorage from '../../helpers/deleteImageFromStorage';
import IComment from '../../Interfaces/post/IComment';
import { authContext } from '../../hooks/useAuth';
import uploadImage from '../../helpers/uploadImage';

const AddInputComment = ({
  numComments,
  setNumComments,
  postId,
  showComments,
  getComments,
  setGetComments,
  setShowCommentInput,
}: {
  numComments: number;
  setNumComments: Function;
  postId: number;
  setShowCommentInput: Function;
  showComments: boolean;
  getComments: Array<IComment>;
  setGetComments: Function;
}) => {
  const { user } = React.useContext(authContext);
  const [data, setData] = useState({
    comment: '',
    image: '',
    UserId: user?.id,
  });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const sendComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isUploading && data.comment) {
      toast.success('Add comment is success ');
      const newComment = await ApiServices.post(
        `post/${postId}/comments`,
        data,
      );
      setShowCommentInput(false);
      if (showComments) {
        setGetComments([newComment.data.data, ...getComments]);
      }
      setNumComments(numComments + 1);
    } else {
      toast.error('please Add Comment');
    }
  };
  const handelDeleteImg = () => {
    const nameFile = {
      name: data.image?.slice(
        data.image.indexOf('%2F') + 3,
        data.image?.indexOf('?'),
      ),
    };
    setData({ ...data, image: '' });
    setFile(null);

    deleteImageFromStorage(nameFile);
  };
  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      comment: e.currentTarget.value,
    });
  };
  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
  }
  React.useEffect(() => {
    (async () => {
      if (file) {
        setIsUploading(true);
        const imageUrl = await uploadImage(file, () => {});
        setData(prevData => ({ ...prevData, image: imageUrl }));
        setIsUploading(false);
      }
    })();
  }, [file]);

  return (
    <form onSubmit={sendComment}>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        paddingTop="5px"
        sx={{ background: '#EFF2F2' }}
      >
        <input
          value={data.comment}
          onChange={handelOnChange}
          placeholder="Add Comment"
          id="add-comment-btn"
          type="text"
          style={{ width: '75%', padding: '8px' }}
        />
        <Box style={{ display: isUploading ? 'block' : 'none' }}>
          <CircularProgress />
        </Box>
        <Box
          style={{ display: data.image ? 'block' : 'none' }}
          role="presentation"
          onClick={handelDeleteImg}
        >
          <HideImageIcon color="primary" />
        </Box>
        <label
          style={{ display: !data.image && !isUploading ? 'block' : 'none' }}
          htmlFor="upload-img-comment"
        >
          <AddPhotoAlternateIcon color="primary" />
        </label>

        <input
          onChange={handleChange}
          type="file"
          name=""
          id="upload-img-comment"
          style={{ display: 'none' }}
        />
        <Button
          sx={{
            width: '20%',
            background: 'rgb(45 155 155)',
            color: '#ffff',
            borderRadius: '0',
          }}
          type="submit"
        >
          Comment
        </Button>
      </Stack>
    </form>
  );
};

export default AddInputComment;
