const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    name: {
      type: String,
    },
    categories: {
      type: Array,
      ref: 'categories',
    },
    key: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('images', imageSchema);
