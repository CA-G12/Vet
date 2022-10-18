import { Outlet } from 'react-router-dom';
import Popup from './components/Popup/Popup';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Nav />
    <Popup />
    <Outlet />
  </div>
);

export default App;
