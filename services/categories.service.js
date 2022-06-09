const Category = require('../db/categories.model');
const boom = require('@hapi/boom');

class CategoryService {
  constructor() {}

  async create(data) {
    try {
      const { name } = data;
      const newImage = new Category();

      newImage.name = name;

      newImage.save();

      return newImage;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const category = await Category.findOne({ _id: id });
      if (!category) {
        throw boom.notFound('Category not found');
      }
      return category;
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      const category = await Category.find({});
      return category;
    } catch (error) {
      throw error;
    }
  }

  async update(id, name) {
    try {
      const _category = await this.findOne(id);
      if (_category) {
        const category = await Category.updateOne({ _id: id }, { name: name });
        return category;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOne(id) {
    try {
      const category = await Category.deleteOne({ _id: id });
      return id;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryService;
