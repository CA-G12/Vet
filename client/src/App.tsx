import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Popup from './components/Popup/Popup';
import 'react-toastify/dist/ReactToastify.css';
import PostsContext from './Context/PostsContext';
import Nav from './components/Nav';
import { ProvideAuth } from './hooks/useAuth';

const App = () => (
  <ProvideAuth>
    <ToastContainer />
    <PostsContext>
      <Nav />
      <Popup />
      <Outlet />
    </PostsContext>
</ProvideAuth>

);

export default App;
