import './App.css';
import { Outlet } from 'react-router-dom';
import PostsContext from './Context/PostsContext';
// import Nav from './components/Nav';
import { Header } from './components/Header/Header';

const App = () => (
  <div>
    <PostsContext>

      <Header />
      <Outlet />
    </PostsContext>

  </div>
);

export default App;
