import { useState } from 'react';
import * as React from 'react';
import { toast } from 'react-toastify';
import { Box, Stack } from '@mui/system';
import { Button } from '@mui/material';
import deleteImageFromStorage from '../../helpers/deleteImageFromStorage';
import IComment from '../../Interfaces/post/IComment';
import ApiServices from '../../services/ApiService';
import UserPostInfo from '../UserInfo';
import EditAndDeleteBtn from './EditAndDeleteBtn';
import EditImageComment from './EditImageComment';
import { authContext } from '../../hooks/useAuth';

const Comment = ({
  comment,
  comments,
  setGetComments,
  numComments,
  setNumComments,
}: {
  comment: IComment;
  comments: Array<IComment>;
  setGetComments: Function;
  numComments: number;
  setNumComments: Function;
}) => {
  const { user } = React.useContext(authContext);

  const [edit, setEdit] = useState(false);
  const [changeComment, setChangeComment] = useState(comment);
  const handeleChangeCommentContent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setChangeComment({ ...changeComment, comment: e.currentTarget.value });
  };

  const saveChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      changeComment.comment &&
      (comment.comment !== changeComment.comment ||
        comment.image !== changeComment.image)
    ) {
      setEdit(!edit);
      toast.success('Update comment is success ');
      if (comment.image !== changeComment.image) {
        const file = {
          name: comment.image?.slice(
            comment.image.indexOf('%2F') + 3,
            comment.image?.indexOf('?'),
          ),
        };
        deleteImageFromStorage(file);
      }

      const url = `post/${changeComment.PostId}/comments/${changeComment.id}`;

      await ApiServices.put(url, changeComment);

      setEdit(!edit);
    } else if (!changeComment.comment) {
      toast.error('the Comment is empty');
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      position="relative"
      sx={{
        padding: ' 10px 40px 10PX 24px',
        borderBottom: '1px solid #cfc4c4',
      }}
    >
      <Stack>
        <UserPostInfo
          id={comment.User.id}
          name={comment.User.name}
          avatar={comment.User.avatar}
        />
        <Box>
          {!edit ? (
            <p style={{ marginLeft: ' 50px' }}>{changeComment.comment}</p>
          ) : (
            <form className="edit-comment" onSubmit={saveChange}>
              <input
                style={{ padding: '5px' }}
                value={changeComment.comment}
                onChange={handeleChangeCommentContent}
              />
              <Button
                sx={{
                  background: '#356E6E',
                  color: '#ffff',
                  padding: '3px',
                  borderRadius: '0',
                }}
                type="submit"
              >
                save
              </Button>
            </form>
          )}
        </Box>
      </Stack>

      <img
        className="comment-img"
        style={{
          display: changeComment.image && !edit ? 'block' : 'none',
          width: '100px',
          borderRadius: '12px',
        }}
        src={changeComment.image ? changeComment.image : ''}
        alt=""
      />
      <Box style={{ display: edit ? 'block' : 'none' }}>
        <EditImageComment setData={setChangeComment} data={changeComment} />
      </Box>
      {user?.id === comment.User?.id && (
        <EditAndDeleteBtn
          deleteData={comments}
          deleteCallback={setGetComments}
          commentId={comment.id}
          postId={comment.PostId}
          numComments={numComments}
          setNumComments={setNumComments}
          setEdit={setEdit}
          edit={edit}
        />
      )}
    </Stack>
  );
};

export default Comment;
