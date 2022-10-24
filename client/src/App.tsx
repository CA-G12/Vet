import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import theme from './helpers/theme';
import PostsContext from './Context/PostsContext';
import Nav from './components/Nav';
import AddPost from './components/AddPost/AddPost';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <PostsContext>
        <ToastContainer />
        <Nav />
        <AddPost />
        <Outlet />
      </PostsContext>
    </ThemeProvider>
  </div>
);

export default App;
