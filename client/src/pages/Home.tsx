import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ApiServices from '../services/ApiService';
import PostsList from '../components/PostCard/PostsList';
import { AllPosts } from '../Context/PostsContext';
import LoadingPosts from './LoadingPosts';
import 'react-toastify/dist/ReactToastify.css';
import BasicSelect from '../components/BasicSelect';
import AddPost from '../components/AddPost/AddPost';

const Home = () => {
  const { TagList, AnimalList } = useContext(AllPosts);
  const [posts, setPost] = useState([]);
  const { filter, setFilter } = useContext(AllPosts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const urlParams = {
        tagId: filter?.TagId === 0 ? '' : filter?.TagId,
        animalId: filter?.AnimalId === 0 ? '' : filter?.AnimalId,
        q: filter?.content,
      };
      const { data } = await ApiServices.get('/posts', { params: urlParams });

      setLoading(true);
      setPost(data);
    })();
  }, [filter]);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: { sm: 1, xs: 3 } }}>
        <Box display="flex" justifyContent="space-between" m={2}>
          <AddPost posts={posts} setPost={setPost} />
          <Box display="flex" justifyContent="flex-end" width="50%">
            {TagList && (
              <Box mr={2}>
                <BasicSelect
                  value={filter.TagId}
                  options={TagList}
                  setValue={value =>
                    setFilter(prev => ({ ...prev, TagId: value }))
                  }
                />
              </Box>
            )}
            {AnimalList && (
              <BasicSelect
                value={filter.AnimalId}
                options={AnimalList}
                setValue={value =>
                  setFilter(prev => ({ ...prev, AnimalId: value }))
                }
              />
            )}
          </Box>
        </Box>
        {loading && posts.length !== 0 ? (
          <PostsList setPost={setPost} posts={posts} />
        ) : loading && posts.length === 0 ? (
          <h2>No Result</h2>
        ) : (
          <LoadingPosts />
        )}
      </Box>
    </Container>
  );
};

export default Home;
