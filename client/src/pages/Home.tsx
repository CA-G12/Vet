// import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
// import Skeleton from '@mui/material/Skeleton';
// import Avatar from '@mui/material/Avatar';
import Filters from '../layouts/Filters';
import ApiServices from '../services/ApiService';
import Posts from '../components/postCard/Posts';
import { AppCtx } from '../components/hooks/Contexts';
import LoadingPosts from './LoadingPosts';

const Home = () => {
  const [posts, setPost] = useState([]);
  const { filterObj, setFilterObj } = useContext(AppCtx);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    const urlParams = {
      tagId: filterObj?.TagId === 0 ? '' : filterObj?.TagId,
      animalId: filterObj?.AnimalId === 0 ? '' : filterObj?.AnimalId,
      q: filterObj?.content,
    };
    ApiServices.get('/api/v1/posts', { params: urlParams }).then(({ data }) => {
      setLoding(true);

      setPost(data);
    });
  }, [filterObj]);

  return (
    <main className="home-page">

      {filterObj && setFilterObj && <Filters id={filterObj} callback={setFilterObj} />}
      {loading && posts.length !== 0 ? <Posts posts={posts} /> : loading && posts.length === 0
        ? <h2 className="no-result">No Result</h2>
        : <LoadingPosts />}
    </main>
  );
};

export default Home;
