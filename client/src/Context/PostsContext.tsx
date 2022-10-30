import React, { createContext, ReactNode, useMemo, useState } from 'react';
import PostInfo from '../Interfaces/post/IAddPost';
import ITag from '../Interfaces/post/ITag';

type Filter = Pick<PostInfo, 'content' | 'AnimalId' | 'TagId'>;

interface IStore {
  AnimalList: ITag[];
  TagList: ITag[];
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

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
export const AllPosts = createContext<IStore>({
  AnimalList,
  TagList,
  filter: {
    AnimalId: -1,
    content: '',
    TagId: -1,
  },
  setFilter: () => {},
});
const PostsContext = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [filter, setFilter] = useState({
    content: '',
    TagId: 0,
    AnimalId: 0,
  });

  const filterPosts = useMemo(
    () => ({
      filter,
      setFilter,
      TagList,
      AnimalList,
    }),
    [filter],
  );

  return <AllPosts.Provider value={filterPosts}>{children}</AllPosts.Provider>;
};
export default PostsContext;
