import Joi from 'joi'
const postSchema = Joi.object({
  content: Joi.string().min(20).required(),
  image: Joi.string().regex(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i).allow(''),
  AnimalId: Joi.number().required(),
  TagId: Joi.number().required(),
  UserId: Joi.number().required()
})

export default postSchema
