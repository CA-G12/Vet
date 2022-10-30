import Skeleton from '@mui/material/Skeleton';

const LoadingPost = () => (
  <div className="loading-post">
    <div className="loading-user-info">
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        height={10}
        width="20%"
        style={{ marginBottom: 6 }}
      />
    </div>
    <div className="post-loading-info">
      <div className="loading-content">
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="60%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="40%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 6 }}
        />
      </div>

      <Skeleton
        className="loading-img"
        width="40%"
        sx={{ height: 60, borderRadius: 4 }}
        animation="wave"
        variant="rectangular"
      />
    </div>
  </div>
);

export default LoadingPost;
