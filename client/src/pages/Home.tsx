import { useContext, useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />{' '}
      {filter && setFilter && (
        <div className="filters">
          {TagList && (
            <BasicSelect
              name="TagId"
              value={filter.TagId}
              options={TagList}
              setValue={value => setFilter(prev => ({ ...prev, TagId: value }))}
            />
          )}
          {AnimalList && (
            <BasicSelect
              name="AnimalId"
              value={filter.AnimalId}
              options={AnimalList}
              setValue={value => setFilter(prev => ({ ...prev, TagId: value }))}
            />
          )}
        </div>
      )}
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
