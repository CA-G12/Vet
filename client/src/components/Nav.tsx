import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to="/">
      Landing
    </NavLink>
    <NavLink to="/home">
      home
    </NavLink>
    <NavLink to="/doctors">
      doctors
    </NavLink>
    <NavLink to="/emergency">
      emergency
    </NavLink>
    <NavLink to="/users/1">
      my profile
    </NavLink>

  </nav>
);

export default Nav;
