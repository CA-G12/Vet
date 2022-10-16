import './post.css';
import PetsIcon from '@mui/icons-material/Pets';
import BtnsPost from './BtnsPost';
import HoverLikes from './HoverLikes';

interface User{
  id:number
  name:string
  avatar:string
}

interface Like{
  id:number
  User:User
}

interface Tag{
  id:number
  name:string
}

interface Animal{
  id:number
  name:string
}
interface IPost{
  id:number
  content:string
  image:string
  User:User
  Likes:Array<Like>
  Tag:Tag
  Animal:Animal

}

interface props{
  post:IPost
}

const Post = ({ post }:props) => (
  <div className="post-card">
    <article className="article">
      <section>
        <div className="user-info-post">
          <img src={post.User.avatar} alt="" />
          <h3>{post.User.name}</h3>
        </div>
        <p className="content">
          {post.content}

        </p>
        <div className="comments-likes-btn">
          <div>
            <i className="fa-solid fa-comment" />
            25
          </div>
          <div className="likesNum">
            <PetsIcon />
            {' '}
            {post.Likes.length}
            <HoverLikes likes={post.Likes} />
          </div>
        </div>
      </section>
      <figure>
        <img className="img-post" src={post.image} alt="" />
      </figure>
    </article>
    <BtnsPost />
  </div>
);

export default Post;
