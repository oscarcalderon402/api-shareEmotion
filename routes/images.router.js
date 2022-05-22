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
    next(error);
  }
});

router.post('/', upload.single('image'), async (req, res, next) => {
  try {
    const result = await uploadFile(req.file);

    const data = JSON.parse(JSON.stringify(req.body));
    const body = JSON.parse(data.body);
    body.key = result.Key;

    const newImage = await service.create(body);

    res.status(201).json(newImage);
  } catch (error) {
    next(error);
  }
});

router.get('/s3/:key', upload.single('image'), async (req, res, next) => {
  try {
    const { key } = req.params;
    const readStream = getFileStream(key);
    readStream.pipe(res);
    res.status(201);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const image = await service.findOne(id);
    res.json(image);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
