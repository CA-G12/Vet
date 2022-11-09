import { useContext, useState } from 'react';
import { Box, Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import useOutsideClick from '../../hooks/UseOutsideClick';
import BtnsPost from './BtnsPost';
import IPost from '../../Interfaces/post/IPost';
import UserPostInfo from '../UserInfo';
import Comments from './Comments';
import StackCommentsAndLikes from './StackCommentsAndLikes';
import ApiServices from '../../services/ApiService';
import { authContext } from '../../hooks/useAuth';
import EditPost from './EditPost';
import EditAndDeletePost from './EditAndDeletePost';
import Hashtags from './Hashtags';

const Post = ({
  post,
  setPosts,
  posts,
}: {
  post: IPost;
  setPosts: Function;
  posts: Array<IPost>;
}) => {
  const { user } = useContext(authContext);

  const [showComments, setShowComments] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(false);
  const [numComments, setNumComments] = useState(post.Comments.length);
  const [editPost, setEditPost] = useState(false);
  const [postContent, setPostContent] = useState(post);
  const [likes, setLikes] = useState(post.Likes);

  const showMore = async () => {
    setIsShowMore(true);
    const getTowComments = await ApiServices.get(
      `posts/${post.id}/comments?page=${page}`,
    );
    setPage(page + 1);
    setGetComments(getComments.concat(getTowComments.data.rows));
    setIsShowMore(false);
  };

  const handleClick = () => {
    setShowComments(!showComments);
    setIsConnected(!isConnected);
    if (!showComments) {
      showMore();
    } else {
      setPage(1);
      setGetComments([]);
    }
  };

  const handleClickOutside = () => {
    setIsConnected(false);
    setPage(1);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ background: '#EFF2F2', borderRadius: '12px' }}
      position="relative"
      ref={ref}
    >
      {user?.id === post.User.id && (
        <EditAndDeletePost
          edit={editPost}
          setEdit={setEditPost}
          postId={post.id}
          deleteData={posts}
          deleteCallback={setPosts}
        />
      )}
      <Box width="100%">
        <Box
          sx={{
            width: '100%',
            borderRadius: '12px',
            padding: { sm: '20px', xs: '0' },
          }}
        >
          <Box width="20%" sx={{ padding: { sm: '0', xs: '20px' } }}>
            <UserPostInfo
              id={post.User.id}
              name={post.User.name}
              avatar={post.User.avatar}
            />
          </Box>
          <Stack
            direction={{ sm: 'row', xs: 'column-reverse' }}
            spacing={2}
            justifyContent={{ sm: 'space-between', xs: 'center' }}
          >
            {!editPost && (
              <Typography
                sx={{
                  textAlign: 'center',
                  padding: '20px 50px',
                }}
                color="primary"
                variant="h6"
                display="block"
                gutterBottom
              >
                {postContent.content}
              </Typography>
            )}
            {postContent.image && !editPost && (
              <Box
                paddingTop={{ sm: '0', xs: '20px' }}
                width={{ sm: '30%', xs: '100%' }}
              >
                <img
                  style={{ width: '100%', borderRadius: '12px' }}
                  src={postContent.image}
                  alt=""
                />
              </Box>
            )}
          </Stack>

          {editPost && (
            <EditPost
              postContent={postContent}
              setPostContent={setPostContent}
              setEditPost={setEditPost}
            />
          )}
          <Stack direction="row" justifyContent="space-evenly">
            <Hashtags tag={post.Tag} animal={post.Animal} />
            <StackCommentsAndLikes
              commentNum={numComments}
              likes={likes}
              handleClick={handleClick}
            />
          </Stack>
        </Box>
      </Box>

      <BtnsPost
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        numComments={numComments}
        setNumComments={setNumComments}
        postId={post.id}
        setLikes={setLikes}
        likes={likes}
        showComments={showComments}
        getComments={getComments}
        setGetComments={setGetComments}
      />

      {showComments && (
        <Box width="100%">
          <Comments
            isShowMore={isShowMore}
            showMore={showMore}
            commentNum={numComments}
            comments={getComments}
            setGetComments={setGetComments}
            numComments={numComments}
            setNumComments={setNumComments}
          />
        </Box>
      )}
    </Box>
  );
};
export default Post;
