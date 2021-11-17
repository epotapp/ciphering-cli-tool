const path = require("path");

const argumentsCLI = process.argv;
var inputPath = {
  'path': '',
  'existing': 0,
}


argumentsCLI.forEach( (item, index, arr)  => {
    if ( (item == '-i') || (item == '--input') ) { 
      inputPath.path = path.resolve(__dirname, arr[index + 1] );
      inputPath.existing = 1;
    } 
  }
);

module.exports = { inputPath };

// if (argumentsCLI.indexOf("-i") > -1) {
//     inputPath = path.resolve(__dirname,argumentsCLI[argumentsCLI.indexOf(('-i') + 1 )]);
// } else if (argumentsCLI.indexOf("--input") > -1) {
//     inputPath = path.resolve(__dirname,  argumentsCLI[argumentsCLI.indexOf(('--input') + 1 )]);
// } else if ( (argumentsCLI.indexOf("--input") == -1) && (argumentsCLI.indexOf("-i") == -1) ){
//   inputPath = stdin;
// } else {
//     stderr.write('Ошибка. Аргумент input ведёт к несуществующему файлу.');
//     process.exit(1);
//}