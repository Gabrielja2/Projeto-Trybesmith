import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': '"username" is required',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.empty': '"classe" is required',
    'string.min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().greater(0).required().messages({
    'number.empty': '"level" is required',
    'number.greater': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': '"password" is required',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

export default userSchema;