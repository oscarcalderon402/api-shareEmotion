const Image = require('../db/images.model');

class ImageService {
  constructor() {}

  async create(data) {
    try {
      const { categories, url } = data;
      const newImage = new Image();
      if (!categories || !url) {
        throw { msg: 'miss data' };
      }
      newImage.categories = categories;
      newImage.url = url;
      newImage.save();

      return newImage;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const image = await Image.findOne(id).populate('categories', { name: 1 });
      if (!image) {
        throw { msg: 'miss data' };
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
