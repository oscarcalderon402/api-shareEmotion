const fs = require('fs');

function deleteFile(route, cb) {
  fs.unlink(route, (err) => {
    if (err) {
      throw err;
    }
  });
}

module.exports = deleteFile;
