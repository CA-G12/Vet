import './post.css';

import {
  useState,
} from 'react';

import useOutsideClick from '../hooks/UseOutsideClick ';
import BtnsPost from './BtnsPost';
import IPost from '../../Interfaces/post/IPost';
import UserPostInfo from '../customComponents/UserPostInfo';
import Comments from './Comments';
import EditAndDeleteBtn from './EditAndDeleteBtn';
import StackCommentsAndLikes from './StackCommentsAndLikes';

const comments = {
  id: 1,
  Comments: [{
    id: 1,
    UserId: 3,
    comment: 'Comment1',
    image: null,
    User: {
      name: 'Kakashi',
      avatar: 'https://media.tenor.com/fR49OunP59UAAAAC/killua-killua-zoldyck.gif',
      id: 1,
    },
  }, {
    id: 2,
    UserId: 2,
    comment: 'Comment2',
    User: {
      name: 'Kakashi',
      avatar: 'https://media.tenor.com/fR49OunP59UAAAAC/killua-killua-zoldyck.gif',
      id: 1,
    },
    image: 'https://i.pinimg.com/originals/8a/81/ec/8a81ecd8fdd266b3221da325875c0ea8.gif',
  }],
};

const Post = ({ post }:IPost) => {
  const [showComments, setShowComments] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const handleClick = () => {
    setShowComments(!showComments);
    setIsConnected(!isConnected);
  };
  const handleClickOutside = () => {
    setShowComments(false);
    setIsConnected(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div ref={ref} className="post-card">
      <article className="article abusluot-btns">
        <section>
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
            commentNum={comments.Comments.length}
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
          <Comments comments={comments.Comments} />

        </div>
        )
      }
    </div>
  );
};
export default Post;
