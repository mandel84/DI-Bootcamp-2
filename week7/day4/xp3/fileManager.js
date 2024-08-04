const fs = require('fs');

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
      callback(err, null);
    } else {
      console.log(`File read successfully: ${filePath}`);
      callback(null, data);
    }
  });
}


function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file to disk: ${err}`);
      callback(err);
    } else {
      console.log(`File written successfully: ${filePath}`);
      callback(null);
    }
  });
}


module.exports = {
  readFile,
  writeFile
};
