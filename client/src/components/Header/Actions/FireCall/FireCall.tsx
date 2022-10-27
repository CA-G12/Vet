// import React from 'react';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Avatar from '@mui/material/Avatar';
import CallIconStyles from './style';

export const FireCall = () => (
  <Avatar sx={CallIconStyles.avatarIcon}>
    <PhoneForwardedIcon sx={CallIconStyles.phoneIcon} />
  </Avatar>
);
