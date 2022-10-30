import { styled } from '@mui/system';

import {
  Avatar, Box, Button, Input, Typography,
} from '@mui/material';

import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from '@mui/icons-material/Apps';

const IconsStyle = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'inline-block',
    'font-size': '1.5em',
    'margin-right': '5px',
  },
};

const CloseIconNav = styled(CloseIcon)({
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
});

const AppsIconNav = styled(AppsIcon)({
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    'font-size': '1.5em',
    'margin-right': '5px',
    order: '10',
  },
});

const HomeIconNav = styled(HomeIcon)(IconsStyle);

const HomeRepairServiceIconNav = styled(HomeRepairServiceIcon)(IconsStyle);

const Diversity1IconNav = styled(Diversity1Icon)(IconsStyle);

const StyledHeader = styled('header')({
  position: 'relative',
  background: 'rgba(90, 89, 89, 0)',
  'backdrop-filter': 'blur(20px)',
  height: '5em',
  'border-bottom': '1px solid rgba(255, 255, 255, 0.1)',
  top: '0',
  left: '0',
  display: 'flex',
  'justify-content': 'space-between',
  'align-items': 'center',
  padding: '0 35px',
  transition: '0.5s ease',
  gap: '1rem',
  '@media screen and (max-width: 850px)':
  {
    padding: '0 20px',
    gap: '0.5rem',
  },
});

const NavigationAnchor = styled(Link)({
  color: '#000116',
  'font-size': '1em',
  'text-decoration': 'none',
  'margin-left': '50px',
  '@media screen and (max-width: 850px)': {
    color: '#222',
    'font-size': '1em',
    margin: '15px 50px',
  },
});

const Navigations = styled(Box)(({
  '.nav-items': {
    'justify-content': 'center',
  },
  '@media screen and (max-width: 850px)': {
    'z-index': '99999',
    position: 'fixed',
    background: 'rgba(223, 219, 219, 0.5)',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    visibility: 'hidden',
    opacity: '0',
    transition: '0.3s ease',

    '&.active': {
      visibility: 'visible',
      opacity: '1',
    },

    '&.active .nav-items': {
      transform: 'translateY(0)',
    },

    '.nav-items': {
      position: 'relative',
      background: '#fff',
      width: '400px',
      'max-width': '400px',
      display: 'grid',
      'place-content': 'center',
      margin: '20px',
      padding: '40px',
      'border-radius': '20px',
      'box-shadow': '0 5px 25px rgba(0, 0, 0, 0.8)',
      transform: 'translateY(-10px)',
      transition: '0.3s ease',
      '@media screen and (max-width: 850px)':
         { transform: 'translateY(0)' },
    },
  },
}));

const NavItems = styled('nav')({

});

const LogoImage = styled('img')({
  width: '6.8rem',
  '@media screen and (max-width: 850px)':
     { width: '4rem' },

});

const ActionsBox = styled(Box)({
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'align-items': 'center',
  gap: '1rem',
  '@media screen and (max-width:850px)': {
    'margin-left': 'auto',
    gap: '0.5rem',
  },
});

const SearchInput = styled(Input)({
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
  },
});

const SearchInputIcon = styled(SearchIcon)({
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
  },
});

const EmergencyAvatar = styled(Avatar)({
  margin: '0 2rem',
  'background-color': '#D53449',
  width: 40,
  height: 40,
  cursor: 'pointer',
  '@media screen and (max-width:850px)': {
    margin: '0 0.5rem',
    width: 25,
    height: 25,
    'margin-right': 'auto',
  },
  '@media screen and (max-width:450px)': {
    width: 23,
    height: 23,
  },
});

const EmergencyPhoneIcon = styled(PhoneForwardedIcon)({
  '@media screen and (max-width:850px)': {
    'font-size': '1rem',
  },
});

const UserTicketBox = styled(Box)({
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'text-align': 'center',
  'margin-right': '1rem',
  gap: '0.1rem',
  '@media screen and (max-width:450px)': {
    gap: '0.1rem',
    'font-size': '0.5rem',
  },
});

const UserAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  '@media screen and (max-width:850px)': {
    width: 25,
    height: 25,
  },
  '@media screen and (max-width:450px)': {
    width: 23,
    height: 23,
  },
});

const UserNameText = styled(Typography)(
  {
    'padding-top': '0.4rem',
    '@media screen and (max-width:850px)': {
      'font-size': '1rem',
    },
    '@media screen and (max-width:450px)': {
      'font-size': '0.5rem',
    },
  },
);

const AuthButtonsBox = styled(Box)({
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'align-items': 'center',
  gap: '1rem',
  '@media screen and (max-width:850px)': {
    gap: '0.5rem',
    'padding-left': '0.3rem',
  },
});

const LoginButton = styled(Button)({
  color: '#D53449',
  'border-color': '#D53449',
  '@media screen and (max-width:450px)': {
    'font-size': '0.45rem',
    padding: '0.1rem',
  },
});

const SignUpButton = styled(Button)({
  'background-color': '#D53449',
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
    padding: '0.1rem',
  },
});

export {
  StyledHeader,
  Navigations,
  NavItems,
  CloseIconNav,
  AppsIconNav,
  HomeIconNav,
  HomeRepairServiceIconNav,
  Diversity1IconNav,
  LogoImage,
  NavigationAnchor,
  ActionsBox,
  SearchInput,
  SearchInputIcon,
  EmergencyAvatar,
  EmergencyPhoneIcon,
  UserTicketBox,
  UserAvatar,
  UserNameText,
  AuthButtonsBox,
  LoginButton,
  SignUpButton,
};
