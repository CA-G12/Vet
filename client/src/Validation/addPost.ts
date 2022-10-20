import * as yup from 'yup';

const postSchema = yup.object().shape({
  content: yup.string().min(20, 'please write a post longer than 20 letters').required(),
  TagId: yup.number().required().min(1, 'please choose a tag'),
  AnimalId: yup.number().required().min(1, 'please choose an animal related to your post'),
});
export default postSchema;
