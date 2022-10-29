import { styled } from '@mui/system';

import {
  Avatar, Box, Button, Input, Typography,
} from '@mui/material';

import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import SearchIcon from '@mui/icons-material/Search';

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
  LogoImage,
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
