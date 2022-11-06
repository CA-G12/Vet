import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IPost from '../../Interfaces/post/IPost';
import EditImagePost from './EditImagePost';

const EditPost = ({ post }: { post: IPost }) => {
  const [postContent, setPostContent] = useState(post);
  const handelPostContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostContent({ ...postContent, content: e.currentTarget.value });
  };
  return (
    <form style={{ width: '100%' }}>
      <Box>
        <Box
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
            defaultValue={postContent.content}
            onChange={handelPostContent}
          />
          <EditImagePost data={postContent} setData={setPostContent} />
        </Box>
        <button onClick={() => {}} type="submit">
          Save
        </button>
      </Box>
    </form>
  );
};

export default EditPost;
