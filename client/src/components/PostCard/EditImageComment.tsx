import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import IComment from '../../Interfaces/post/IComment';
import uploadImage from '../../helpers/uploadImage';

type Props = {
  data: IComment;
  setData: React.Dispatch<React.SetStateAction<IComment>>;
};

const EditImageComment = ({ data, setData }: Props) => {
  const [isUploading, setIsUploading] = useState(false);
  const deleteImg = () => {
    setData({ ...data, image: null });
  };
  const editImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      const imageUrl = await uploadImage(file, () => {});
      setData(prevData => ({ ...prevData, image: imageUrl }));
      setIsUploading(false);
    }
  };

  return (
    <div
      className="edit-img-comment-icons"
      style={{
        width: '60px',
        height: '60px',
        backgroundImage: data.image
          ? `url(${data.image})`
          : 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png)',
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
        )}
      </div>
      {isUploading && (
        <div className="progress-edit">
          {' '}
          <CircularProgress />
        </div>
      )}{' '}
    </div>
  );
};
export default EditImageComment;
