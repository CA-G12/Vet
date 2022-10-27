import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import IComment from '../../Interfaces/post/IComment';
import handleUpload from '../../helpers/handleUpload';

const EditImageComment = ({ data, callback }:
  {data:IComment, callback:Function, }) => {
  const [isUpLoadImg, setIsUpLoadImg] = useState(false);
  const deleteImg = () => {
    callback({ ...data, image: null });
  };
  const editImg = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setTimeout(() => {
        handleUpload(
          data,
          callback,
          file,
          setIsUpLoadImg,
        );
      }, 0);
    }
  };

  return (
    <div
      className="edit-img-comment-icons"
      style={{
        width: '60px',
        height: '60px',
        backgroundImage: data.image ? `url(${data.image})` : 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png)',
        backgroundSize: 'contain',
        margin: '0 20px 0 0',
        borderRadius: '8px',
        position: 'relative',
      }}
    >
      <div>

        <IconButton className="mangment-img-comment-btn">
          <label htmlFor={`${data.id}`}>
            <input
              onChange={editImg}
              type="file"
              name=""
              style={{ display: 'none' }}
              id={`${data.id}`}
            />
            <EditIcon />

          </label>

        </IconButton>

        {data.image && (
        <IconButton className="mangment-img-comment-btn" onClick={deleteImg}>
          <DeleteIcon />
        </IconButton>
        ) }
      </div>
      {
        isUpLoadImg && (
        <div className="progress-edit">
          {' '}
          <CircularProgress />
        </div>
        )

      }
      {' '}

    </div>
  );
};
export default EditImageComment;
