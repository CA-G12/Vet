import './layouts.css';
import { useContext } from 'react';
import addPostAuth from '../Interfaces/post/IAddPost';
import BasicSelect from '../components/BasicSelect';
import { AllPosts } from '../Context/PostsContext';

const Filters = ({ id, callback }:{id:addPostAuth, callback:Function}) => {
  const { TagList, AnimalList } = useContext(AllPosts);
  return (
    <div className="filters">
      {TagList && <BasicSelect post={id} name="TagId" itemId="TagId" obj={TagList} callback={callback} />}
      {AnimalList && <BasicSelect post={id} name="AnimalId" itemId="AnimalId" obj={AnimalList} callback={callback} />}
    </div>
  );
};

export default Filters;
