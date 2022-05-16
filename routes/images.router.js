const express = require('express');
const Image = require('../services/images.service');

const upload = require('../lib/multer');
const { uploadFile, getFileStream } = require('../lib/s3');
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

router.post('/test', upload.single('image'), async (req, res) => {
  try {
    console.log(req.file);
    const result = uploadFile(req.file);
    console.log(result);
    res.status(201);
  } catch (error) {
    res.json(error);
  }
});

router.get('/s3/:key', upload.single('image'), async (req, res) => {
  try {
    const { key } = req.params;
    const readStream = getFileStream(key);
    readStream.pipe(res);
    res.status(201);
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
