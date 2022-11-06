import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import ApiServices from '../services/ApiService';
import PostsList from '../components/PostCard/PostsList';
import { AllPosts } from '../Context/PostsContext';
import LoadingPosts from './LoadingPosts';
import 'react-toastify/dist/ReactToastify.css';
import BasicSelect from '../components/BasicSelect';

const Home = () => {
  const { TagList, AnimalList } = useContext(AllPosts);
  const [posts, setPost] = useState([]);
  const { filter, setFilter } = useContext(AllPosts);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    (async () => {
      const urlParams = {
        tagId: filter?.TagId === 0 ? '' : filter?.TagId,
        animalId: filter?.AnimalId === 0 ? '' : filter?.AnimalId,
        q: filter?.content,
      };
      const { data } = await ApiServices.get('/posts', { params: urlParams });

      setLoding(true);
      setPost(data);
    })();
  }, [filter]);

  return (
    <main className="home-page">
      <Box
        width={{ lg: '25%', sm: '50%' }}
        minHeight="100vh"
        component="div"
        display="flex"
        flexDirection={{ sm: 'column', xs: 'row' }}
        alignItems="center"
        sx={{
          minHeight: {
            lg: '100vh',
            sm: '0',
          },
          backgroundColor: { sm: 'primary.main', xs: '#ffff' },
          position: 'relative',
          top: { sm: '-97px' },
          padding: { sm: '120px 50px', xs: '20px 0 0 0' },
        }}
      >
        {TagList && (
          <Box
            mt={2}
            width="100%"
            sx={{ backgroundColor: 'common.white', borderRadius: '8px' }}
          >
            <BasicSelect
              value={filter.TagId}
              options={TagList}
              setValue={value => setFilter(prev => ({ ...prev, TagId: value }))}
            />
          </Box>
        )}
        {AnimalList && (
          <Box
            mt={2}
            width="100%"
            sx={{ backgroundColor: 'common.white', borderRadius: '8px' }}
          >
            <BasicSelect
              value={filter.AnimalId}
              options={AnimalList}
              setValue={value =>
                setFilter(prev => ({ ...prev, AnimalId: value }))
              }
            />
          </Box>
        )}
      </Box>
      {loading && posts.length !== 0 ? (
        <PostsList posts={posts} />
      ) : loading && posts.length === 0 ? (
        <h2 className="no-result">No Result</h2>
      ) : (
        <LoadingPosts />
      )}
    </main>
  );
};

export default Home;
