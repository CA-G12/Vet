import './App.css';
import { Outlet } from 'react-router-dom';
import PostsContext from './components/Context/PostsContext';
import Nav from './components/Nav';

const App = () => (
  <div>
    <PostsContext>

      <Nav />

      <Outlet />
    </PostsContext>

  </div>
);

export default App;
