import './App.css';
import { Outlet } from 'react-router-dom';
import Popup from './components/Popup/Popup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import theme from './helpers/theme';
import PostsContext from './Context/PostsContext';
import Nav from './components/Nav';
import { ProvideAuth } from './hooks/useAuth';
import AddPost from './components/AddPost/AddPost';

const App = () => (
  <ThemeProvider theme={theme}>

    <ProvideAuth>
      <ToastContainer />
      <PostsContext>
        <Nav />
        <Popup />
        <AddPost />

        <Outlet />
      </PostsContext>
    </ProvideAuth>
  </ThemeProvider>

);

export default App;
