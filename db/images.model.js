const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    categories: {
      type: Array,
      ref: 'categories'
    },
    url: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('images', imageSchema);
