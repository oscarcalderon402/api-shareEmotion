const Joi = require('joi');

const name = Joi.string();
const role = Joi.string().min(4);
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  name: name.required(),
  role: role.required(),
  email: email.required(),
  password: password.required()
});

module.exports = { createUserSchema };
