import * as yup from 'yup';

const postSchema = yup.object().shape({
  content: yup.string().min(120).required(),
  image: yup.mixed(),
  TagId: yup.number().required(),
  AnimalId: yup.number().required(),
});
export default postSchema;
