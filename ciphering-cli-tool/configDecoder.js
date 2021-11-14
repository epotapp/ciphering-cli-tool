const fs = require('fs');
const path = require('path');

const { caesar } = require('./transcaesar');
const { caesardec } = require('./transcaesardec');
const { atbash } = require('./transatbash');
const { rot8 } = require('./transrot8');
const { rot8dec } = require('./transrot8dec');

const { stderr, stdin, stdout, exit } = require('process'); 
// const { argumentsCLI } = require('./index');

// const configCipher = argumentsCLI[2];
// const configInput = argumentsCLI[4];
// const configOutput = argumentsCLI[6];
// const validConfigs = [`-c`, `-config`, `-i`, `-input`, `-o`, `-output`];





const argumentsCLI = process.argv;

if (argumentsCLI.indexOf('-c') > -1) {
    
    var configIncomingString = argumentsCLI[argumentsCLI.indexOf('-c') + 1];

} else if ( argumentsCLI.indexOf('--config') > - 1) {
    configIncomingString = argumentsCLI[argumentsCLI.indexOf('--config') + 1];

} else {
    throw new Error ('Please input config (Example: -c/--config C1-A-R1)');
};

var configArray = configIncomingString.split('-');

exports.configArray = configArray;



let streamArray = [];
//let configMap = new Map();

 for (let code = 0; code < configArray.length; code++) {

 console.log(configArray[code]);
    
     switch(configArray[code]) {
          case 'C0':
              streamArray.push(caesardec)
              //configMap.set(code, 'caesardec');
              console.log('caesardec');
              break;
          case 'C1':
              streamArray.push(caesar)
              //configMap.set(code, 'caesar');
              console.log('caesar');
              break;
          case 'A':
              streamArray.push(atbash)
              //configMap.set(code, 'atbash');
              console.log('atbash');
              break;
          case 'R0':
              streamArray.push(rot8dec)
              //configMap.set(code, 'rot8dec');
              console.log('rot8dec');
              break;
          case 'R1':
              streamArray.push(rot8)
              //configMap.set(code, 'rot8');
              console.log('rot8');
              break;
          default:
              throw new Error(`Ошибка валидации конфига`)
      }

 }


//  console.log(streamArray[0]);

exports.streamArray = streamArray;



// var configSet = new Set(configArray.sort());
// for (let code of configSet) {
//     console.log(configSet.values());
// }




// if ( (configCipher !== validConfigs[0]) || (configCipher == validConfigs[1]) ) {
//     throw new Error(
//         'Введите строку конфигурации -c "Шифр вида {XY-}n" -i "шифруемый файл" -o "файл записи"'
//         );
//     };
    
