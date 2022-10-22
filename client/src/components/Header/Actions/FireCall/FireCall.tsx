// @flow
// import React from 'react';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Avatar from '@mui/material/Avatar';

const IconStyle = {

  margin: '0 2rem',
  'background-color': '#D53449',
  width: 40,
  height: 40,
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
};
const phoneIcon = {
  '@media screen and (max-width:850px)': {
    'font-size': '1rem',
  },
};
export const FireCall = () => (
  <Avatar sx={IconStyle}>
    <PhoneForwardedIcon sx={phoneIcon} />
  </Avatar>
);
