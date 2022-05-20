const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },

    password: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('users', usersSchema);
