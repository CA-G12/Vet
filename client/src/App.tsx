import './App.css';
import { Outlet } from 'react-router-dom';
import Post from './components/postCard/Post';
import Nav from './components/Nav';

const post = {
  id: 1,
  content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.santium
  assumenda voluptate molestias facilis animi. Distinctio ad inventore non
  voluptatem, architecto vero.`,
  image: 'https://media.tenor.com/_0IEPY_t658AAAAM/killua-cat.gif',
  User: {
    name: 'Kakashi',
    avatar: 'https://media.tenor.com/fR49OunP59UAAAAC/killua-killua-zoldyck.gif',
    id: 1,
  },
  Likes: [
    {
      id: 1,
      User: {
        name: 'salsabeel',
        id: 2,

        avatar: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Mikasa-Ackermann.Attack-on-Titan.webp',
      },
    },
    {
      id: 3,
      User: {
        name: 'aseel',
        id: 3,
        avatar: 'https://cdn.oneesports.gg/cdn-data/2022/02/AttackonTitan_MikasaAckermanScarf-.jpg',

      },
    },
  ],
  Tag: {
    id: 1,
    name: 'All',
  },
  Animal: {
    id: 1,
    name: 'All',
  },
};

const App = () => (
  <div>
    <Nav />
    <Post post={post} />

    <Outlet />
  </div>
);

export default App;
