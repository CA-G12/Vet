import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Selector{
    id:number
    name:string
}
interface Props{
    name:string
    obj: Selector[]
}

const BasicSelect = ({ name, obj } :Props) => {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="basic-select-label">{name}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={choice}
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
