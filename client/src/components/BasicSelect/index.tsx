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
  options: Option[];
}

const BasicSelect = ({ options, setValue, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };

  return (
    <FormControl
      sx={{
        borderRadius: '8px',
      }}
      fullWidth
      hiddenLabel
    >
      <Select
        sx={{
          border: 'none',
          margen: {
            sm: '100px',
            xs: '50px',
          },
        }}
        labelId="basic-select-label"
        id="basic-select"
        value={`${value}`}
        onChange={handleChange}
      >
        {options.map((option: Option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default BasicSelect;
