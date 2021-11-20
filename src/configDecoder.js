const caesar = require("./streams/transcaesar");
const caesardec = require("./streams/transcaesardec");
const atbash = require("./streams/transatbash");
const rot8 = require("./streams/transrot8");
const rot8dec = require("./streams/transrot8dec");

const configValidator = require('./validatorconfig');


var configArray = configValidator(process.argv);


console.log('');
console.log('Начало работы программы.');
console.log('');
console.log('Используется следующая конфигурация шифров:');


var streamArray = [];

for (let code = 0; code < configArray.length; code++) {
  console.log(configArray[code]);

  switch (configArray[code]) {
    case "C0":
      streamArray.push(new caesardec);
      console.log("Дешифровка Цезаря");
      break;
    case "C1":
      streamArray.push(new caesar);
      console.log("Шифр Цезаря");
      break;
    case "A":
      streamArray.push(new atbash);
      console.log("Шифр Атбаш");
      break;
    case "R0":
      streamArray.push(new rot8dec);
      console.log("Дешифровка Rot8");
      break;
    case "R1":
      streamArray.push(new rot8);

      console.log("Шифр Rot8");
      break;
    default:
      throw validationError = new Error(`Ошибка валидации конфига`);
  }
}


module.exports = { streamArray };