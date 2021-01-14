const Joi = require('joi');

const signupValidation = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(255).required(),
    lastName: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().min(11).required(),
    gender: Joi.string().required(),
    password: Joi.string().min(6).max(30).required(),
  });

  return schema.validate(body);
};

const signinValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(body);
};

const categoryValidation = (body) => {
  const schema = Joi.object({
    category_name: Joi.string().min(3).max(30).required(),
  });

  return schema.validate(body);
};

const bookValidation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    author: Joi.string().min(3).max(20).required(),
    date: Joi.date().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
  });

  return schema.validate(body);
};

module.exports = {
  signupValidation,
  signinValidation,
  categoryValidation,
  bookValidation,
};
