require('dotenv').config();

const config = {
  dbUrl: process.env.DB_URL,
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_BUCKET_REGION,
  accesKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  jwtSecret: process.env.JWT_SECRET
};

module.exports = { config };
