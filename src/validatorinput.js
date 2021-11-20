const path = require("path");
const fs = require('fs');
const { argv, stdout } = require("process");

module.exports = class InputValidator {

  constructor (argv) {
    this.path = "";
    this.existing = null;
    this.argv = argv;
  }


  validate() {
    
    this.argv.forEach( (item, index, arr)  => {
      
      let errorString = null;
      
      if ( (item == '-i') || (item == '--input') ) { 
        
        if (!fs.existsSync(`${__dirname}\\${arr[index + 1]}`)) { 
          errorString = 'Файл "input" задан некорректно! Работа завершена.';
        }
        
        this.path = path.resolve(__dirname, arr[index + 1] );
        this.existing = 1;
        
      }
    
      if (errorString) {
        throw Error(errorString);
      }

    });
    
  }

}

