import './post.css';

import IPost from '../../Interfaces/post/IPost';
import Post from '.';

const Posts = ({ posts }: { posts: Array<IPost> }) => (
  <>
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </>
);
export default Posts;
