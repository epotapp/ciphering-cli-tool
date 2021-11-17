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
