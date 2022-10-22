// @flow
// import React from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const searchIconStyle = {
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
    // width: '5.5rem',
  },
};
export const Search = () => (
  <Input
    sx={searchIconStyle}
    id="input-with-icon-adornment"
    startAdornment={(
      <InputAdornment position="start">
        <SearchIcon sx={searchIconStyle} />
      </InputAdornment>
    )}
  />
);
