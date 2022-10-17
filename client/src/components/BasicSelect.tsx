import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './BasicSelect.css';

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
    <Box sx={{ minWidth: 1000 }}>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        sx={{
          width: 300,
          color: '#2D9B9B',
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className="demo-simple-select"
        value={choice}
        label="choice"
        onChange={handleChange}
      >
        {obj.map<React.ReactNode>((tag:Selector) => (
          <MenuItem key={tag.id} value={tag.id}>{tag.name}</MenuItem>))}
      </Select>
    </Box>
  );
};
export default BasicSelect;
