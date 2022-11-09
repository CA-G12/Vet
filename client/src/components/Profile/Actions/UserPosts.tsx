import { Box, Typography } from '@mui/material/';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPost from '../../../Interfaces/post/IPost';
import ApiServices from '../../../services/ApiService';
import Post from '../../PostCard/PostsList';

export const UserPosts = () => {
  const params = useParams();
  const [uPosts, setUPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await ApiServices.get(`/posts/${params.id}`);
      setUPosts(data.posts);
    };
    getPosts();
  }, [params.id]);
  return (
    <Box display="flex" justifyContent="center">
      {uPosts.length > 0 ? (
        <Post posts={uPosts} setPost={setUPosts} />
      ) : (
        <Typography textAlign="center"> No Posts Published </Typography>
      )}
    </Box>
  );
};
