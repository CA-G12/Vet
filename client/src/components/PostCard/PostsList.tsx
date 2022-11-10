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
  <Box
    display="flex"
    margin={{ xs: 'auto', sm: '0' }}
    width={{ xs: '90%' }}
    overflow="hidden"
    flexDirection="column"
    gap="40px"
    alignItems="center"
  >
    {posts.map(post => (
      <Post key={post.id} setPosts={setPost} posts={posts} post={post} />
    ))}
  </Box>
);
export default Posts;
