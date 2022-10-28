import './post.css';

import {

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

const Post = ({ post }:{post:IPost}) => {
  const [showComments, setShowComments] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(false);
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
    setShowComments(false);
    setIsConnected(false);
    setPage(1);
    setGetComments([]);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div ref={ref} className="post-card">
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
            commentNum={post.Comments.length}
            likes={post.Likes}
            handleClick={handleClick}
          />
        </section>
        {post.image && (
        <figure className="img-post-desctop">
          <img className="img-post" src={post.image} alt="" />
        </figure>
        ) }
        <EditAndDeleteBtn />
      </article>
      <BtnsPost isConnected={isConnected} setIsConnected={setIsConnected} />

      {
        showComments && (
        <div>
          <Comments
            isShowMore={isShowMore}
            showMore={showMore}
            commentNum={post.Comments.length}
            comments={getComments}
          />

        </div>
        )
      }
    </div>
  );
};
export default Post;
