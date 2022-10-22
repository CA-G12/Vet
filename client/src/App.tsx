import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
// import Nav from './components/Nav';

const App = () => (
  <div>
    <Header />
    <h1>kakashi is here</h1>
    <Outlet />
  </div>
);

export default App;
