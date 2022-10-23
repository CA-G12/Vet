import {
  createContext, useMemo, useState,
} from 'react';
import addPostAuth from '../../Interfaces/post/IAddPost';

interface IStore{
  filterObj?:addPostAuth;
  setFilterObj?:Function;
  TagList?:Array<{name:string, id:number}>;
  AnimalList?:Array<{name:string, id:number}>
}
export const AllPosts = createContext<IStore >({});
const PostsContext = ({ children }:any) => {
  const [filterObj, setFilterObj] = useState({
    content: '',
    TagId: 0,
    AnimalId: 0,
  });
  const TagList = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Need help' },
    { id: 2, name: 'Advise' },
    { id: 3, name: 'Up for adoption' },
    { id: 4, name: 'Memes' },
    { id: 5, name: 'Up for sale' },
  ];
  const AnimalList = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Cats' },
    { id: 2, name: 'Dogs' },
    { id: 3, name: 'Turtles' },

  ];

  const filterPosts = useMemo(() => ({
    filterObj, setFilterObj, TagList, AnimalList,
  }), [filterObj]);
  return (
    <AllPosts.Provider value={filterPosts}>
      {children}

    </AllPosts.Provider>

  );
};
export default PostsContext;
