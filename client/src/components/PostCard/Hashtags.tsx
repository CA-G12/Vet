import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { AllPosts } from '../../Context/PostsContext';
import ITag from '../../Interfaces/post/ITag';

const Hashtags = ({ tag, animal }: { tag: ITag; animal: ITag }) => {
  const { filter, setFilter } = useContext(AllPosts);
  const filterAnimal = () => {
    setFilter({ ...filter, AnimalId: animal.id });
  };
  const filterTag = () => {
    setFilter({ ...filter, TagId: tag.id });
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip color="primary" label={tag.name} onClick={filterTag} />
      <Chip
        color="primary"
        variant="outlined"
        label={animal.name}
        onClick={filterAnimal}
      />
    </Stack>
  );
};
export default Hashtags;
