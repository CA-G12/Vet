import { Box } from '@mui/system';
import ILike from '../../Interfaces/post/ILike';
import UserLike from './UserLike';

const HoverLikes = ({ likes }: { likes: Array<ILike> }) => (
  <Box>
    {likes.map((liked: ILike) => (
      <UserLike
        key={liked.id}
        id={liked.User.id}
        name={liked.User.name}
        avatar={liked.User.avatar}
      />
    ))}
  </Box>
);

export default HoverLikes;
