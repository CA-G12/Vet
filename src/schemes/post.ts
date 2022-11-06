import Joi from 'joi';
const postSchema = Joi.object({
  content: Joi.string().min(20).required(),
  image: Joi.string()
    .regex(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i)
    .allow(''),
  Animal: { id: Joi.number().required(), name: Joi.string().required() },
  Tag: { id: Joi.number().required(), name: Joi.string().required() },
  UserId: Joi.number().required(),
});

export default postSchema;
