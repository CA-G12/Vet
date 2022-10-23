import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PostsContext from './Context/PostsContext';
import Nav from './components/Nav';
import AddPost from './components/AddPost/AddPost';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <Nav />
    <ToastContainer />
    <AddPost />
    <Outlet />
    <PostsContext>
      <Nav />
      <Outlet />
    </PostsContext>

  </div>
);

export default App;
