import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Nav />
    <h1>kakashi is here</h1>
    <Outlet />
  </div>
);

export default App;
