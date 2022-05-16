const express = require('express');
const Image = require('../services/images.service');
const router = express.Router();

const service = new Image();

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

module.exports = router;
