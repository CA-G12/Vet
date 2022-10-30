import * as Joi from 'joi';

const addAppointmentValid = (data: object) => {
  const schema = Joi.object({
    DoctorId: Joi.number().required(),
    id: Joi.number().required(),
    description: Joi.string().min(10).required(),
    end: Joi.date().iso().required(),
    start: Joi.date().iso().required(),
    title: Joi.string().min(5).required(),
  });
  return schema.validateAsync(data);
};

const updateAppointmentValid = (data: object) => {
  const schema = Joi.object({
    DoctorId: Joi.number().required(),
    id: Joi.number().required(),
    start: Joi.date().iso().required(),
    end: Joi.date().iso().required(),
  });
  return schema.validateAsync(data);
};

export default {
  addAppointmentValid,
  updateAppointmentValid,
};
