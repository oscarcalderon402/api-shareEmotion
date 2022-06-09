const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();

const createCategoriesSchema = Joi.object({
  name: name.required(),
});

const updateCategoriesSchema = Joi.object({
  name: name.required(),
});

const getCategoriesSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategoriesSchema,
  updateCategoriesSchema,
  getCategoriesSchema,
};
