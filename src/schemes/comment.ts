import Joi from 'joi';
const commentSchema = Joi.object({
  comment: Joi.string().min(2).required(),
  image: Joi.string()
    .regex(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i)
    .allow(''),
  UserId: Joi.number(),
  PostId: Joi.number(),
});

export default commentSchema;
