const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    category: {
      type: Array,
      default: []
    },
    url: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('images', imageSchema);
