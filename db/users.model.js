const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },
    role: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('users', userSchema);
