const express = require('express');
const Category = require('../services/categories.service');
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

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newImage = await service.create(body);
    res.status(201).json(newImage);
  } catch (error) {
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const image = await service.findOne(id);
    res.json(image);
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
