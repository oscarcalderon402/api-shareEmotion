const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '..', 'uploads') });

module.exports = upload;
