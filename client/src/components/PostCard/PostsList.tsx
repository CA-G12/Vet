import './post.css';

import IPost from '../../Interfaces/post/IPost';
import Post from '.';

const Posts = ({ posts }: { posts: Array<IPost> }) => (
  <div className="posts">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);
export default Posts;
