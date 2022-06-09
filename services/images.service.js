const Image = require('../db/images.model');
const path = require('path');
const boom = require('@hapi/boom');
const deleteFile = require('../utils/scripts/deleteFile');

class ImageService {
  constructor() {}

  async create(data) {
    try {
      const { name, categories, key } = data;
      const newImage = new Image();

      newImage.name = name;
      newImage.categories = categories;
      newImage.key = key;
      await newImage.save();

      if (newImage) {
        setTimeout(
          () => deleteFile(path.join(__dirname, '..', 'uploads', key)),
          4000
        );
      }

      return newImage;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const image = await Image.findOne(id).populate('categories', { name: 1 });
      if (!image) {
        throw boom.notFound('Image not found');
      }
      return image;
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      const images = Image.find({}).populate('categories', { name: 1 });
      return images;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ImageService;
