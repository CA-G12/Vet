import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ITag from '../../Interfaces/post/ITag';

interface Props {
  name: string;
  options: ITag[];
}

const BasicSelect = ({ name, options }: Props) => (
  <Box sx={{ minWidth: 100 }}>
    <FormControl fullWidth>
      <InputLabel id="basic-select-label">{name}</InputLabel>
      <Select
        defaultValue={0}
        labelId="basic-select-label"
        id="basic-select"
        name={name}
        label={name}
      >
        {options.map((tag: ITag) => (
          <MenuItem key={tag.id} value={tag.id}>
            {tag.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default BasicSelect;
