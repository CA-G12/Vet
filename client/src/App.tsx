import './App.css';
import { Outlet } from 'react-router-dom';
import PostsContext from './Context/PostsContext';
// import Nav from './components/Nav';
import { LandingPage } from './components/LandingPage/LandingPage';

const App = () => (
  <div>
    <PostsContext>

      <LandingPage />

      <Outlet />
    </PostsContext>

  </div>
);

export default App;
