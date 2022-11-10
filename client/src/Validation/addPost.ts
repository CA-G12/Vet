import * as yup from 'yup';

const postSchema = yup.object().shape({
  content: yup
    .string()
    .min(3, 'please write a post longer than 20 letters')
    .required('please write a post longer than 20 letters'),
  TagId: yup
    .number()
    .required('please choose a tag')
    .min(1, 'please choose a tag'),
  AnimalId: yup
    .number()
    .required('please choose an animal related to your post')
    .min(1, 'please choose an animal related to your post'),
});
export default postSchema;
