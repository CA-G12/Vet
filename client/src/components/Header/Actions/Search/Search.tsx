import {
  useContext, ChangeEvent, useState, useEffect,
} from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import depounce from '../../../../services/debounce';

import { AllPosts } from '../../../../Context/PostsContext';

const searchIconStyle = {
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
  },
};

export const Search = () => {
  const { filterObj, setFilterObj } = useContext(AllPosts);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // change Context value
  useEffect(() => {
    depounce(() => {
      if (setFilterObj) {
        setFilterObj({ ...filterObj, content: searchInput });
      }
    }, 1500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <Input
      value={searchInput}
      onChange={handleSearchInputChange}
      sx={searchIconStyle}
      id="input-with-icon-adornment"
      startAdornment={(
        <InputAdornment position="start">
          <SearchIcon sx={searchIconStyle} />
        </InputAdornment>
    )}
    />
  );
};
