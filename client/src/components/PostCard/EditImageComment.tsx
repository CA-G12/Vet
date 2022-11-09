import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Stack } from '@mui/system';
import IComment from '../../Interfaces/post/IComment';
import uploadImage from '../../helpers/uploadImage';
import IPost from '../../Interfaces/post/IPost';

type Props = {
  data: IComment | IPost;
  setData: any;
};

const EditImageComment = ({ data, setData }: Props) => {
  const [isUploading, setIsUploading] = useState(false);
  const deleteImg = () => {
    setData({ ...data, image: null });
  };
  const editImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      const imageUrl = await uploadImage(file, () => {});
      setData({ ...data, image: imageUrl });
      setIsUploading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '80px',
        height: '80px',
        backgroundImage: data.image
          ? `url(${data.image})`
          : 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png)',
        backgroundSize: 'contain',
        margin: '0 20px 0 0',
        borderRadius: '8px',
        position: 'relative',
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          height: '112px',
          position: 'absolute',
          top: '-16px',
          right: '-15px',
        }}
      >
        <IconButton>
          <label htmlFor={`${data.id}`}>
            <input
              onChange={editImg}
              type="file"
              name=""
              style={{ display: 'none' }}
              id={`${data.id}`}
            />
            <EditIcon />
          </label>
        </IconButton>

        {data.image && (
          <IconButton className="mangment-img-comment-btn" onClick={deleteImg}>
            <DeleteIcon />
          </IconButton>
        )}
      </Stack>
      {isUploading && (
        <Box position="absolute" top="30%" left="25%">
          {' '}
          <CircularProgress />
        </Box>
      )}{' '}
    </Box>
  );
};
export default EditImageComment;
