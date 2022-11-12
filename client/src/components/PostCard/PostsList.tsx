import { Box } from '@mui/system';
import IPost from '../../Interfaces/post/IPost';
import Post from '.';

const Posts = ({
  posts,
  setPost,
}: {
  posts: Array<IPost>;
  setPost: React.Dispatch<React.SetStateAction<IPost[]>>;
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    minHeight="85vh"
  >
    {posts.map(post => (
      <Box mb={2} width="100%">
        <Post key={post.id} setPosts={setPost} posts={posts} post={post} />
      </Box>
    ))}
  </Box>
);
export default Posts;
