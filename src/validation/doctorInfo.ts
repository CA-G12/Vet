import * as Joi from 'joi';

const doctorInfoValid = (data: object) => {
  const schema = Joi.object({
    DoctorId: Joi.number().required(),
    hourRate: Joi.string().required(),
    workplace: Joi.string().required(),
    universityDegree: Joi.string()
      .regex(/(https?:\/\/.*\.(?:pdf))/i)
      .allow('')
      .required(),
    clinicLocation: Joi.string().required(),
  });
  return schema.validateAsync(data);
};
export default doctorInfoValid;
