import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import AddPost from './components/AddPost/AddPost';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <Nav />
    <ToastContainer />
    <h1>kakashi is here</h1>
    <AddPost />
    <Outlet />
  </div>
);

export default App;
