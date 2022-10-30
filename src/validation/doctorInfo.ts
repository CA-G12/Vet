import * as Joi from 'joi';

const doctorInfoValid = (data: object) => {
  const schema = Joi.object({
    doctorId: Joi.number().required(),
    hourRate: Joi.string().required(),
    workplace: Joi.string().required(),
    clinicLocation: Joi.string().required(),
  });
  return schema.validateAsync(data);
};
export default doctorInfoValid;
