import './post.css';

import {

  useContext,
  useState,
} from 'react';

import useOutsideClick from '../../hooks/UseOutsideClick ';
import BtnsPost from './BtnsPost';
import IPost from '../../Interfaces/post/IPost';
import UserPostInfo from '../UserInfo';
import Comments from './Comments';
import EditAndDeleteBtn from './EditAndDeleteBtn';
import StackCommentsAndLikes from './StackCommentsAndLikes';
import ApiServices from '../../services/ApiService';
import { authContext } from '../../hooks/useAuth';

const Post = ({ post }:{post:IPost}) => {
  const { user } = useContext(authContext);

  const [showComments, setShowComments] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(false);
  const [numComments, setNumComments] = useState(post.Comments.length);
  const showMore = () => {
    setIsShowMore(true);
    ApiServices.get(`posts/${post.id}/comments?page=${page}`).then((res) => {
      setPage(page + 1);
      setGetComments(getComments.concat(res.data.rows));
      setIsShowMore(false);
    });
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
    <div
      ref={ref}
      className="post-card"
    >
      <article className="article abusluot-btns">
        <section className="post-content-continuer">
          <UserPostInfo user={post.User} style={{ dimensions: 40, alignItems: 'center' }} />
          {post.image && (
          <div className="img-post-mobile">
            <img src={post.image} alt="" />
          </div>
          ) }
          <p className="content">
            {post.content}

          </p>

          <StackCommentsAndLikes
            commentNum={numComments}
            likes={post.Likes}
            handleClick={handleClick}
          />

        </section>
        {post.image && (
        <figure className="img-post-desctop">
          <img className="img-post" src={post.image} alt="" />
        </figure>
        ) }
        {
        user?.id === post.User.id
          && <EditAndDeleteBtn />
}
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

      {
        showComments && (
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
        )
      }
    </div>
  );
};
export default Post;
