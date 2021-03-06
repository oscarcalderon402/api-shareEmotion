const express = require('express');
const User = require('../services/users.service');
const { createUserSchema } = require('./../schemas/users.schema');
const validatorHandler = require('../middleware/validator.handler');
const router = express.Router();

const service = new User();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (error) {
    res.json(error);
  }
});

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await service.update(id, name);
    res.json(id);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.deleteOne(id);
    res.json(id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
