import { useState } from 'react';

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
      <div className={active ? 'navigation active' : 'navigation'}>
        <nav className="nav-items">
          <CloseIcon sx={styles.closeIcon} onClick={menuDisActive} />
          <a href="/home">
            <HomeIcon sx={styles.navItemsStyle} />
            Home
          </a>
          <a href="/home">
            <Diversity1Icon sx={styles.navItemsStyle} />
            Doctors
          </a>
          <a href="/home">
            <HomeRepairServiceIcon sx={styles.navItemsStyle} />
            Services
          </a>
        </nav>
      </div>
      <AppsIcon sx={styles.apps} onClick={menuActive} />
    </>
  );
};
