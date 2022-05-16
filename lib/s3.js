const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const { config } = require('../config/index');

const bucketName = config.bucketName;
const region = config.region;
const accessKeyId = config.accesKeyId;
const secretAccessKey = config.secretAccessKey;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
});
//uploads a file to s3
async function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  };

  return await s3.upload(uploadParams).promise();
}
//downloads a file
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  };

  return s3.getObject(downloadParams).createReadStream();
}

module.exports = { uploadFile, getFileStream };
