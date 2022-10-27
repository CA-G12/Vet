import { useState } from 'react';
import * as React from 'react';
import { toast } from 'react-toastify';
import deleteImgFromFirEBase from '../../helpers/DeleteImgFrom FireBse';
import IComment from '../../Interfaces/post/IComment';
import ApiServices from '../../services/ApiService';
import UserPostInfo from '../UserInfo';
import EditAndDeleteBtn from './EditAndDeleteBtn';
import EditImageComment from './EditImageComment';

const Comment = ({
  comment, comments, setGetComments, numComments, setNumComments,
}:
  { comment: IComment, comments:Array<IComment>,
     setGetComments:Function,
     numComments:number
    setNumComments:Function,
  }) => {
  const user = {
    id: 1,
  };
  const [edit, setEdit] = useState(false);
  const [changeComment, setChangeComment] = useState(comment);
  const handeleChangeCommentContent = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setChangeComment({ ...changeComment, comment: e.currentTarget.value });
  };
  const saveChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (changeComment.comment
      && (comment.comment !== changeComment.comment || comment.image !== changeComment.image)) {
      setEdit(!edit);
      toast.success('Update comment is success ', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      if (comment.image !== changeComment.image) {
        const file = {
          name: comment.image?.slice(comment.image.indexOf('%2F') + 3, comment.image?.indexOf('?')),
        };
        deleteImgFromFirEBase(file);
      }

      const url = `post/${changeComment.PostId}/comments/${changeComment.id}`;
      console.log(url);

      ApiServices.put(url, changeComment).then(() => setEdit(!edit)).catch(() => {
        console.log('err');
      });
    } else if (!changeComment.comment) {
      toast.error('the Comment is empty', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  return (
    <div className="comment-container abusluot-btns">
      <div className="comment">
        <UserPostInfo user={comment.User} style={{ dimensions: 30, alignItems: 'flex-start' }} />
        <div className="content-comment">
          { !edit ? <p>{changeComment.comment}</p>

            : (
              <form className="edit-comment" onSubmit={saveChange}>
                <input value={changeComment.comment} onChange={handeleChangeCommentContent} />
                <button type="submit">save</button>
              </form>
            ) }
        </div>
      </div>

      <img className="comment-img" style={{ display: changeComment.image && !edit ? 'block' : 'none' }} src={changeComment.image ? changeComment.image : ''} alt="" />
      <div style={{ display: edit ? 'block' : 'none' }}>
        <EditImageComment callback={setChangeComment} data={changeComment} />

      </div>
      {
user.id === comment.User?.id

      && (
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
      )
}
    </div>

  );
};

export default Comment;
