const express = require('express');
const User = require('../services/users.service');
const router = express.Router();

const service = new User();

router.get('/', async (req, res) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const image = await service.update(id, name);
    res.json(id);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await service.deleteOne(id);
    res.json(id);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
