import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ReactNode } from 'react';
import IAddPost from '../Interfaces/post/IAddPost';

interface Selector{
    id:number
    name:string
}
interface Props{
  itemId:string
  post:IAddPost
  callback:Function
  name:string
  obj: Selector[]
}

const BasicSelect = ({
  name, obj, post, callback, itemId,
} :Props) => {
  const handleChange = (event: SelectChangeEvent<ReactNode>) => {
    if (itemId === 'TagId') {
      callback({ ...post, TagId: event.target.value });
    } else {
      callback({ ...post, AnimalId: event.target.value });
    }
  };

  return (
    <Box
      className="filterInput"
      sx={{ minWidth: 150 }}
    >
      <FormControl fullWidth>
        <InputLabel id="basic-select-label">{name}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={itemId === 'TagId' ? post.TagId : post.AnimalId}
          label={name}
          onChange={handleChange}
        >
          {obj.map((tag:Selector) => (
            <MenuItem key={tag.id} value={tag.id}>{tag.name}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default BasicSelect;
