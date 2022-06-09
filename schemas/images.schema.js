const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const categories = Joi.array();

const createImagesSchema = Joi.object({
  name: name.required(),
  categories: categories.required(),
});

const updateImagesSchema = Joi.object({
  name: name,
  categories: categories,
});

const getImagesSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createImagesSchema,
  updateImagesSchema,
  getImagesSchema,
};
