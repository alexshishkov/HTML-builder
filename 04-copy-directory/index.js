const fs = require('fs');
const path = require('path');

fs.promises.readdir(path.join(__dirname, 'files')).then( response => {
  fs.mkdir(path.join(__dirname, 'files-copy'), () => {});
  response.forEach ((file)=> {
    fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), () => {});
  });
});
