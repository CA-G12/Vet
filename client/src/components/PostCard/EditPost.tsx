import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import IPost from '../../Interfaces/post/IPost';
import EditImagePost from './EditImagePost';
import ApiServices from '../../services/ApiService';

const EditPost = ({
  postContent,
  setPostContent,
  setEditPost,
}: {
  postContent: IPost;
  setPostContent: Function;
  setEditPost: Function;
}) => {
  const handelPostContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostContent({ ...postContent, content: e.currentTarget.value });
  };
  const handEleditPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ApiServices.put(`post/${postContent.id}`, {
      content: postContent.content,
      image: postContent.image,
      AnimalId: postContent.Animal.id,
      TagId: postContent.Tag.id,
    });
    setEditPost(false);
  };
  return (
    <form onSubmit={handEleditPost}>
      <Stack>
        <Box
          margin="20px 0"
          flexWrap={{ sm: 'nowrap', xs: 'wrap-reverse' }}
          display="flex"
          justifyContent={{ sm: 'space-between', xs: 'center' }}
          gap="20px"
        >
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={5}
            fullWidth
            defaultValue={postContent.content}
            onChange={handelPostContent}
          />
          <EditImagePost data={postContent} setData={setPostContent} />
        </Box>
        <Button sx={{ width: '25%' }} type="submit" variant="contained">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default EditPost;
