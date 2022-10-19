import ImageIcon from '@mui/icons-material/Image';

const AddInputComment = () => (
  <div className="addCommentInput">
    <input placeholder="Add Comment" id="add-comment-btn" type="text" />

    <label htmlFor="upload-img-comment">
      {' '}
      <ImageIcon />
    </label>
    <input type="file" name="" id="upload-img-comment" />
  </div>
);

export default AddInputComment;
