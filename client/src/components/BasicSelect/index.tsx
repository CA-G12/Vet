import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Option {
  id: number;
  name: string;
}

interface Props {
  value: number;
  setValue: (value: number) => void;
  name: string;
  options: Option[];
}

const BasicSelect = ({ name, options, setValue, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };

  return (
    <Box className="filterInput" sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="basic-select-label">{name}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={`${value}`}
          label={name}
          onChange={handleChange}
        >
          {options.map((option: Option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default BasicSelect;
