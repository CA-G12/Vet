import './post.css';

import { Box } from '@mui/system';
import IPost from '../../Interfaces/post/IPost';
import Post from '.';

const Posts = ({
  posts,
  setPost,
}: {
  posts: Array<IPost>;
  setPost: Function;
}) => (
  <Box display="flex" flexDirection="column" gap="40px" alignItems="center">
    {posts.map(post => (
      <Post key={post.id} setPosts={setPost} posts={posts} post={post} />
    ))}
  </Box>
);
export default Posts;
