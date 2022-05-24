const fs = require('fs');
const path = require('path');

fs.promises.readdir(path.join(__dirname, 'files')).then( response => {
  fs.mkdir(path.join(__dirname, 'files-copy'), () => {});
  fs.promises.readdir(path.join(__dirname, 'files-copy')).then( res => {
    res.forEach ((file)=> {
      fs.unlink(path.join((path.join(__dirname, 'files-copy')), file), () => {});
    });
    response.forEach ((file)=> {
      fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), () => {});
    });
  });
});
