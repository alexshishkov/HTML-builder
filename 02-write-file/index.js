const { stdin, stdout } = process;
const path = require('path');
const fs = require('fs');

stdout.write('Привет, введите, пожалуйста, свой текст и поставьте мне хороший балл\n');
fs.writeFile(
  path.join(__dirname, 'text.txt'),
  '',
  () => {}
);
stdin.on('data', data => {
  fs.appendFile(path.join(__dirname, 'text.txt'),
    data,
    () => {
      if (data.toString().trim() === 'exit') {
        process.exit();
      }
    });
});
process.on('exit', () => stdout.write('Спасибо, удачи в обучении!'));
process.on('SIGINT', () => {process.exit();});