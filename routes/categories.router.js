const express = require('express');
const Category = require('../services/categories.service');

const {
  createCategoriesSchema,
  updateCategoriesSchema,
  getCategoriesSchema,
} = require('./../schemas/categories.schema');
const validatorHandler = require('../middleware/validator.handler');
const router = express.Router();

const service = new Category();

router.get('/', async (req, res) => {
  try {
    const images = await service.find();
    res.json(images);
  } catch (error) {
    res.json(error);
  }
});

router.post(
  '/',
  validatorHandler(createCategoriesSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newImage = await service.create(body);
      res.status(201).json(newImage);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await service.findOne(id);
      res.json(image);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  validatorHandler(updateCategoriesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const image = await service.update(id, name);
      res.json(id);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.deleteOne(id);
      res.json(id);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
