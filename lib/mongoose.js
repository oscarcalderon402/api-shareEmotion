const mongoose = require('mongoose');
const { config } = require('../config/index');

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB Connected');
  } catch (error) {
    console.log('something was wrong with DB');
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
