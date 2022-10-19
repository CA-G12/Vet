import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const AddInputComment = () => (
  <form className="addCommentInput">
    <input placeholder="Add Comment" id="add-comment-btn" type="text" />

    <label htmlFor="upload-img-comment">
      {' '}
      <AddPhotoAlternateIcon />
    </label>
    <input type="file" name="" id="upload-img-comment" />
    <button className="add-comment-btn" type="submit">Comment</button>
  </form>
);

export default AddInputComment;
