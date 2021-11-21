const {stdout} = require('process');
const caesar = require("./streams/transcaesar");
const caesardec = require("./streams/transcaesardec");
const atbash = require("./streams/transatbash");
const rot8 = require("./streams/transrot8");
const rot8dec = require("./streams/transrot8dec");

const configValidator = require('./validatorconfig');

const configArray = configValidator(process.argv);


module.exports = function configDecoder() {

    let streamArray = [];
  
    for (let code = 0; code < configArray.length; code++) {

        switch (configArray[code]) {
            case "C0":
              streamArray.push(new caesardec);
              break;
            case "C1":
              streamArray.push(new caesar);
              break;
            case "A":
              streamArray.push(new atbash);
              break;
            case "R0":
              streamArray.push(new rot8dec);
              break;
            case "R1":
              streamArray.push(new rot8);
              break;
            default:
              throw validationError = new Error(`Ошибка валидации конфига`);
        }
    }


    return streamArray;

}

