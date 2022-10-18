import './post.css';
import PetsIcon from '@mui/icons-material/Pets';
import Tooltip from '@mui/material/Tooltip';
import {
  useState,
} from 'react';
import useOutsideClick from '../customHooks/UseOutsideClick ';
import BtnsPost from './BtnsPost';
import HoverLikes from './HoverLikes';
import IPost from '../../Interfaces/post/IPost';
import UserPostInfo from './UserPostInfo';
import Comments from './Comments';

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

  const handleClick = () => {
    setShowComments(!showComments);
  };
  const handleClickOutside = () => {
    setShowComments(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div ref={ref} className="post-card">
      <article className="article">
        <section>
          <UserPostInfo post={post} />
          {post.image && (
          <div className="img-post-mobile">
            <img src={post.image} alt="" />
          </div>
          ) }
          <p className="content">
            {post.content}

          </p>
          <div className="comments-likes-btn">
            <div role="presentation" onClick={handleClick}>
              <Tooltip title="Show Comments">
                <i className="fa-solid fa-comment" />
              </Tooltip>
              {comments.Comments.length}
            </div>
            <div className="likesNum">
              <PetsIcon />
              {' '}
              {post.Likes.length}
              <HoverLikes likes={post.Likes} />
            </div>
          </div>
        </section>
        {post.image && (
        <figure className="img-post-desctop">
          <img className="img-post" src={post.image} alt="" />
        </figure>
        ) }

      </article>
      <BtnsPost />
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
