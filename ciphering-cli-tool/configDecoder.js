const fs = require('fs');
const path = require('path');

const { caesar } = require('./transcaesar');
const { caesardec } = require('./transcaesardec');
const { atbash } = require('./transatbash');
const { rot8 } = require('./transrot8');
const { rot8dec } = require('./transrot8dec');

const { stderr, stdin, stdout, exit } = require('process'); 


const argumentsCLI = process.argv;

if (argumentsCLI.indexOf('-c') > -1) {
    
    var configIncomingString = argumentsCLI[argumentsCLI.indexOf('-c') + 1];

} else if ( argumentsCLI.indexOf('--config') > - 1) {
    configIncomingString = argumentsCLI[argumentsCLI.indexOf('--config') + 1];

} else {
    throw new Error ('Please input config (Example: -c/--config C1-A-R1)');
};

var configArray = configIncomingString.split('-');



var streamArray = [];

var streamMap = new Map();


for (let code = 0; code < configArray.length; code++) {

    console.log(configArray[code]);
    
    switch(configArray[code]) {
        case 'C0':
            //   streamArray.push(caesardec);
              streamMap.set(code, caesardec);
              console.log('caesardec');
              break;
        case 'C1':
            //   streamArray.push(caesar);
              streamMap.set(code, caesar);
              console.log('caesar');
              break;
        case 'A':
            //   streamArray.push(atbash);
              streamMap.set(code, atbash);
              console.log('atbash');
              break;
        case 'R0':
            //   streamArray.push(rot8dec);
              streamMap.set(code, rot8dec);
              console.log('rot8dec');
              break;
        case 'R1':
            //   streamArray.push(rot8);
              streamMap.set(code, rot8);
              console.log('rot8');
              break;
        default:
              throw new Error(`Ошибка валидации конфига`)
    }

}

console.log (streamMap.get(2));


exports.streamMap = streamMap;


