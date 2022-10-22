// @flow
// import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from '@mui/icons-material/Apps';
import './NavHeader.css';
import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Actions } from '../Actions/Actions';

const navItemsStyle = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'inline-block',
    'font-size': '1.5em',
    'margin-right': '5px',
  },

};

const apps = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    'font-size': '1.5em',
    'margin-right': '5px',
    order: '10',
  },
};

const closeIcon = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    color: '#222',
    position: 'absolute',
    top: '0',
    right: '0',
    'font-size': '1.3em',
    margin: '10px',
    cursor: 'pointer',
  },
};

export const NavHeader = () => {
  const [active, setActive] = useState(false);
  const menuDisActive = () => {
    setActive(false);
  };
  const menuActive = () => {
    setActive(true);
  };
  return (
    <div className="nav-bar">
      <Logo />
      <div className={active ? 'navigation active' : 'navigation'}>
        <nav className="nav-items">
          <CloseIcon sx={closeIcon} onClick={menuDisActive} />
          <a href="/home">
            <HomeIcon sx={navItemsStyle} />
            Home
          </a>
          <a href="/home">
            <Diversity1Icon sx={navItemsStyle} />
            Doctors
          </a>
          <a href="/home">
            <HomeRepairServiceIcon sx={navItemsStyle} />
            Services
          </a>
        </nav>
      </div>
      <AppsIcon sx={apps} onClick={menuActive} />
      <Actions />
    </div>
  );
};
