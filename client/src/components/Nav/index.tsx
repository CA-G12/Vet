import { useContext, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
import { AllPosts } from '../../Context/PostsContext';
import { authContext } from '../../hooks/useAuth';

const Nav = () => {
  const { filterObj, setFilterObj } = useContext(AllPosts);
  const { user } = useContext(authContext);
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
      <NavLink to={`/profile/${user?.id}`}>
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
