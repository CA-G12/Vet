import { Box, Typography } from '@mui/material/';
import { useEffect, useState, useContext } from 'react';
import { authContext } from '../../hooks/useAuth';
import IPost from '../../Interfaces/post/IPost';
import ApiServices from '../../services/ApiService';
import Post from '../PostCard/PostsList';

export const UserPosts = () => {
  const [uPosts, setUPosts] = useState<IPost[]>([]);
  const { user } = useContext(authContext);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await ApiServices.get(`/posts/${user?.id}`);
      setUPosts([...data.posts]);
    };
    getPosts();
  }, [user?.id]);
  return (
    <Box>
      {uPosts.length > 0 ? (
        <Post posts={uPosts} />
      ) : (
        <Typography> Start Publish </Typography>
      )}
    </Box>
  );
};
