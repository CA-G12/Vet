import './App.css';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import Popup from './components/Popup/Popup';
import theme from './helpers/theme';
import PostsContext from './Context/PostsContext';
// import Nav from './components/Nav';
import { ProvideAuth } from './hooks/useAuth';
import { Header } from './components/Header/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <ProvideAuth>
      <ToastContainer />
      <PostsContext>
        <Header />
        <Popup />
        <Outlet />
      </PostsContext>
    </ProvideAuth>
  </ThemeProvider>

);

export default App;
