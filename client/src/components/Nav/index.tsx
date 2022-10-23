import { useContext, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
import { AllPosts } from '../Context/GetPosts';

const Nav = () => {
  const { filterObj, setFilterObj } = useContext(AllPosts);

  return (
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
      <input
        value={filterObj?.content}
        onChange={(event: SelectChangeEvent<ReactNode>) => {
          if (setFilterObj) {
            setFilterObj({ ...filterObj, content: event.target.value });
          }
        }}
        type="text"
      />
    </nav>
  );
};

export default Nav;
