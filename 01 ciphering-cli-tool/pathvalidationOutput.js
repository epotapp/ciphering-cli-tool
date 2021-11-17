const path = require("path");


const argumentsCLI = process.argv;
var outputPath = {
  'path': '',
  'existing': 0,
}

argumentsCLI.forEach( (item, index, arr)  => {
  if ( (item == '-o') || (item == '--output') ) { 
    outputPath.path = path.resolve(__dirname, arr[index + 1] );
    outputPath.existing = 1;
  }
}
);

module.exports = { outputPath };





// if (argumentsCLI.indexOf("-o") > -1) {
//     var outputPath = path.resolve(__dirname, argumentsCLI[ argumentsCLI.indexOf(('-o') + 1 ) ] );
// } else if (argumentsCLI.indexOf("--output") > -1) {
//     outputPath = path.resolve(__dirname, argumentsCLI[ argumentsCLI.indexOf(('--output') + 1 ) ] );
// } else if ( (argumentsCLI.indexOf("--output") == -1) && (argumentsCLI.indexOf("-o") == -1) ){
//   inputPath = stdout;
// } else {
//     stderr.write('Ошибка. Аргумент output ведёт к несуществующему файлу.');
//     process.exit(1);
// }

// const writable = createWriteStream(outputPath, { flags: "a" });

// module.exports = writable;
