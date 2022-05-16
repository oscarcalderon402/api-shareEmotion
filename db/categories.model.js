const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('categories', categorySchema);
