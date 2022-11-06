import './post.css';
import { useContext, useState } from 'react';
import useOutsideClick from '../../hooks/UseOutsideClick';
import BtnsPost from './BtnsPost';
import IPost from '../../Interfaces/post/IPost';
import UserPostInfo from '../UserInfo';
import Comments from './Comments';
import EditAndDeleteBtn from './EditAndDeleteBtn';
import StackCommentsAndLikes from './StackCommentsAndLikes';
import ApiServices from '../../services/ApiService';
import { authContext } from '../../hooks/useAuth';
import EditPost from './EditPost';

const Post = ({ post }: { post: IPost }) => {
  const { user } = useContext(authContext);

  const [showComments, setShowComments] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(false);
  const [numComments, setNumComments] = useState(post.Comments.length);
  const [editPost, setEditPost] = useState(false);
  const [postContent, setPostContent] = useState(post);

  const showMore = async () => {
    setIsShowMore(true);
    const getTowComments = await ApiServices.get(
      `posts/${post.id}/comments?page=${page}`,
    );
    setPage(page + 1);
    setGetComments(getComments.concat(getTowComments.data.rows));
    setIsShowMore(false);
  };

  const handleClick = () => {
    setShowComments(!showComments);
    setIsConnected(!isConnected);
    if (!showComments) {
      showMore();
    } else {
      setPage(1);
      setGetComments([]);
    }
  };

  const handleClickOutside = () => {
    setIsConnected(false);
    setPage(1);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div ref={ref} className="post-card">
      <article className="article abusluot-btns">
        <section style={{ width: '100%' }} className="post-content-continuer">
          <UserPostInfo user={post.User} />
          {post.image && !editPost && (
            <div className="img-post-mobile">
              <img src={postContent.image} alt="" />
            </div>
          )}
          {!editPost && <p className="content">{postContent.content}</p>}
          {editPost && (
            <EditPost
              postContent={postContent}
              setPostContent={setPostContent}
              setEditPost={setEditPost}
            />
          )}

          <StackCommentsAndLikes
            commentNum={numComments}
            likes={post.Likes}
            handleClick={handleClick}
          />
        </section>
        {postContent.image && !editPost && (
          <figure className="img-post-desctop">
            <img className="img-post" src={post.image} alt="" />
          </figure>
        )}
        {user?.id === post.User.id && (
          <EditAndDeleteBtn
            edit={editPost}
            setEdit={setEditPost}
            postId={post.id}
          />
        )}
      </article>

      <BtnsPost
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        numComments={numComments}
        setNumComments={setNumComments}
        postId={post.id}
        showComments={showComments}
        getComments={getComments}
        setGetComments={setGetComments}
      />

      {showComments && (
        <div>
          <Comments
            isShowMore={isShowMore}
            showMore={showMore}
            commentNum={numComments}
            comments={getComments}
            setGetComments={setGetComments}
            numComments={numComments}
            setNumComments={setNumComments}
          />
        </div>
      )}
    </div>
  );
};
export default Post;
