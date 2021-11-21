const path = require("path");
const fs = require('fs');
const { argv, stderr } = require("process");

module.exports = class OutputValidator {

  constructor (argv) {
    this.path = "";
    this.truePath = 1;
    this.existing = null;
    this.argv = argv;
  }

  validate() {
    
    this.argv.map( (item, index, arr)  => {

      let errorString = null;

      if ( (item == '-o') || (item == '--output') ) { 
                
        if (!fs.existsSync(`${__dirname}\\${arr[index + 1]}`)) { 
          errorString = 'Файл "output" задан некорректно! Работа завершена.';
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