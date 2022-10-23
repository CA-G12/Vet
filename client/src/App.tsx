import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Popup from './components/Popup/Popup';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav';
import { ProvideAuth } from './hooks/useAuth';

const App = () => (
  <ProvideAuth>
    <ToastContainer />
    <div>
      <Nav />
      <Popup />
      <Outlet />
    </div>
  </ProvideAuth>
);

export default App;
