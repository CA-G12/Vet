import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import IComment from '../../Interfaces/post/IComment';
import uploadImage from '../../helpers/uploadImage';
import IPost from '../../Interfaces/post/IPost';

type Props = {
  data: IComment | IPost;
  setData: any;
};

const EditImagePost = ({ data, setData }: Props) => {
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
        padding: '50px',
        width: { sm: '50%', xs: '100%' },
        height: { sm: '150px', xs: '300px' },
        backgroundImage: data.image
          ? `url(${data.image})`
          : 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png)',
        backgroundSize: 'cover',
        margin: { sm: '0 20px 0 0', xs: '0' },
        borderRadius: '8px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '106%',
          padding: ' 0 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          position: 'absolute',
          top: ' -8px',
          right: '-7px',
        }}
      >
        <IconButton className="mangment-img-comment-btn">
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
      </Box>
      {isUploading && (
        <Box position="absolute" top="40%" left="40%">
          <CircularProgress />
        </Box>
      )}{' '}
    </Box>
  );
};
export default EditImagePost;
