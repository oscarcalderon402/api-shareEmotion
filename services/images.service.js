const Image = require('../db/images.model');

class ImageService {
  constructor() {}

  async create(data) {
    try {
      const { category, url } = data;
      const newImage = new Image();
      if (!category || !url) {
        throw { msg: 'miss data' };
      }
      newImage.category = category;
      newImage.url = url;
      newImage.save();

      return newImage;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const image = await Image.findOne(id);
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
      const images = Image.find({});
      return images;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ImageService;
