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


for (let code = 0; code < configArray.length; code++) {

    console.log(configArray[code]);
    
    switch(configArray[code]) {
        case 'C0':
            streamArray.push(caesardec);
              console.log('caesardec');
              break;
        case 'C1':
            streamArray.push(caesar);
              console.log('caesar');
              break;
        case 'A':
            streamArray.push(atbash);
              console.log('atbash');
              break;
        case 'R0':
            streamArray.push(rot8dec);
              console.log('rot8dec');
              break;
        case 'R1':
            streamArray.push(rot8);
              console.log('rot8');
              break;
        default:
              throw new Error(`Ошибка валидации конфига`)
    }

}




exports.streamArray = streamArray;