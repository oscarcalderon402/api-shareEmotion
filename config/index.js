require('dotenv').config();

const config = {
  dbUrl: process.env.DB_URL
};

module.exports = { config };
