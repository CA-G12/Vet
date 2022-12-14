import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { Box, Stack } from '@mui/system';
import { Button } from '@mui/material';
import Comment from './Comment';
import IComment from '../../Interfaces/post/IComment';
import LoadingComments from './LoadingComment';

interface IComments {
  comments: Array<IComment>;
  showMore: Function;
  commentNum: number;
  isShowMore: boolean;
  setGetComments: Function;
  numComments: number;
  setNumComments: Function;
}

const Comments = ({
  comments,
  showMore,
  commentNum,
  isShowMore,
  setGetComments,
  numComments,
  setNumComments,
}: IComments) => (
  <Box paddingBottom="10px">
    {comments.map(comment => (
      <Comment
        setGetComments={setGetComments}
        comments={comments}
        key={comment.id}
        comment={comment}
        numComments={numComments}
        setNumComments={setNumComments}
      />
    ))}
    {isShowMore && <LoadingComments />}

    {commentNum > comments.length && (
      <Stack direction="row" justifyContent="flex-end">
        <Button onClick={() => showMore()}>
          Show More <KeyboardDoubleArrowDownIcon />
        </Button>
      </Stack>
    )}
  </Box>
);

export default Comments;
