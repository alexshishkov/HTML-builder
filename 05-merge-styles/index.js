const fs = require('fs');
const path = require('path');

fs.promises.readdir(path.join(__dirname, 'styles')).then( response => { response.forEach((file) => {
  if(file.substring(file.indexOf('.')) === '.css') {
    fs.createReadStream(path.join(__dirname, 'styles', file)).pipe(
      fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'), { flags: 'a'})
    );
  }
});
});


