const fs = require('fs');
const path = require('path');

fs.promises.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}).then( response => {
  response.forEach ((file)=> {
    if(file.isFile() === true) {
      fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
        console.log(`${path.parse(file.name).name} - ${(path.parse(file.name).ext).slice(1)} - ${Math.floor (stats.size/1024)} kb`);
      });
    }
  });
});
