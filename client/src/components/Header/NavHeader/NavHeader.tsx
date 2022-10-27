import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from '@mui/icons-material/Apps';

import './NavHeader.css';
import styles from './styles';

export const NavHeader = () => {
  const [active, setActive] = useState(false);

  const menuDisActive = () => {
    setActive(false);
  };
  const menuActive = () => {
    setActive(true);
  };

  return (
    <>
      <Box className={active ? 'navigation active' : 'navigation'}>
        <nav className="nav-items">
          <CloseIcon sx={styles.closeIcon} onClick={menuDisActive} />
          <Link to="/home">
            <HomeIcon sx={styles.navItemsStyle} />
            Home
          </Link>
          <Link to="/home">
            <Diversity1Icon sx={styles.navItemsStyle} />
            Doctors
          </Link>
          <Link to="/home">
            <HomeRepairServiceIcon sx={styles.navItemsStyle} />
            Services
          </Link>
        </nav>
      </Box>
      <AppsIcon sx={styles.apps} onClick={menuActive} />
    </>
  );
};
