import './App.css';
import { Outlet } from 'react-router-dom';
import Context from './components/hooks/Contexts';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Context>

      <Nav />

      <Outlet />
    </Context>

  </div>
);

export default App;
