import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

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
    <Box
      display="flex"
      alignItems={{ sx: 'center' }}
      flexDirection={{ sm: 'row', s: 'column' }}
    >
      <Box
        width={{ sm: '30%', s: '100%' }}
        minHeight="100vh"
        component="div"
        display="flex"
        marginTop={{ s: '30px' }}
        flexDirection={{ sm: 'column', s: 'row' }}
        alignItems="center"
        sx={{
          minHeight: {
            lg: '100vh',
            sm: '0',
          },
          backgroundColor: { sm: 'primary.main', s: '#ffff' },
          position: 'relative',
          top: { sm: '-97px' },
          padding: { sm: '120px 50px', s: '20px 0 0 0' },
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
      <Box
        width={{ sm: '60%', md: '40%', s: '100%' }}
        sx={{ margin: '30px auto' }}
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          position={{ s: 'absolute', sm: 'static' }}
          left="5px"
          top="40px"
          margin="20px 0"
        >
          <AddPost posts={posts} setPost={setPost} />
        </Box>
        {loading && posts.length !== 0 ? (
          <PostsList setPost={setPost} posts={posts} />
        ) : loading && posts.length === 0 ? (
          <h2 className="no-result">No Result</h2>
        ) : (
          <LoadingPosts />
        )}
      </Box>
    </Box>
  );
};

export default Home;
