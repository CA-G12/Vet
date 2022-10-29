import {
  useContext, ChangeEvent, useState, useEffect,
} from 'react';

import InputAdornment from '@mui/material/InputAdornment';

import depounce from '../../../../services/debounce';

import { AllPosts } from '../../../../Context/PostsContext';
import { SearchInput, SearchInputIcon } from '../../components.styled';

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
    <SearchInput
      value={searchInput}
      onChange={handleSearchInputChange}
      startAdornment={(
        <InputAdornment position="start">
          <SearchInputIcon />
        </InputAdornment>
    )}
    />
  );
};
