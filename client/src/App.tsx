import './App.css';
import { Outlet } from 'react-router-dom';
import GetPosts from './components/Context/GetPosts';
import Nav from './components/Nav';

const App = () => (
  <div>
    <GetPosts>

      <Nav />

      <Outlet />
    </GetPosts>

  </div>
);

export default App;
