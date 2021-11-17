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
