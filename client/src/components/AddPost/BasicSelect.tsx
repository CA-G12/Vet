import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import addPostType from '../../Interfaces/Post';

interface Selector{
    id:number
    name:string
}
interface Props{
    itemId:string
    id:addPostType
    callback:Function
    name:string
    obj: Selector[]
}

const BasicSelect = ({
  name, obj, id, callback, itemId,
} :Props) => {
  const handleChange = (e:any) => {
    if (itemId === 'TagId') {
      callback({ ...id, TagId: e.target.value });
    } else {
      callback({ ...id, AnimalId: e.target.value });
    }
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="basic-select-label">{name}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={itemId === 'TagId' ? id.TagId : id.AnimalId}
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
