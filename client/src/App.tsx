import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import AddPost from './components/AddPost/AddPost';

const App = () => (
  <div>
    <Nav />
    <h1>kakashi is here</h1>
    <AddPost />
    <Outlet />
  </div>
);

export default App;
