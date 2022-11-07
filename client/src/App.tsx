import './App.css';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import theme from './helpers/theme';
import PostsContext from './Context/PostsContext';
import { ProvideAuth } from './hooks/useAuth';
import { Header } from './components/Header/Header';
import Notifications from './components/Notification';
import { Footer } from './components/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <ProvideAuth>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PostsContext>
        <Header />
        <Notifications />
        <Outlet />
        <Footer />
      </PostsContext>
    </ProvideAuth>
  </ThemeProvider>
);

export default App;
