const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { strictEqual } = require('assert');

//
//
const { caesar } = require('./transcaesar');
const { atbash } = require('./transatbash');
//
//

const readable = createReadStream('./input.txt');
const writable = createWriteStream('./output.txt');

class TransRot8 extends Transform {
    
    constructor () {
        super({transform(chunk, encoding, callback) {

            const chunkStringified = chunk.toString();
    
            const transformedChunk = rot8Func(chunkStringified);
    
            callback(null, transformedChunk);
            },
        });
    }

    

}


const rot8 = new TransRot8();

exports.rot8 = rot8;

/*  pipeline(
      readable,
      atbash,   
      rot8,
      caesar,
      atbash,
      writable,
      (err) => {
          if (err) {
            console.error('Pipeline failed', err);
          } else {
              console.log('Pipeline succeed!');
          }
          
      }
) */
    
    
function rot8Func (str) {
        
    let array = str.split('');
    let transformedArray = [];
    
    for (i = 0; i < array.length; i++) {
        
        let inpLetterIndex = array[i].charCodeAt();
        
        if ( ( (inpLetterIndex > 64) && (inpLetterIndex < 83 ) ) || ( (inpLetterIndex > 96) && (inpLetterIndex < 115) ) ) {
            transformedArray.push(String.fromCharCode(inpLetterIndex + 8));
            
        } else if ( (inpLetterIndex > 82) && (inpLetterIndex < 91) ) {
            transformedArray.push(String.fromCharCode(inpLetterIndex - 18));                
            
        } else if ( (inpLetterIndex > 114) && (inpLetterIndex < 123) ) {
            transformedArray.push(String.fromCharCode(inpLetterIndex - 18));               
            
        } else transformedArray.push(array[i]);
    }   
    
    return transformedArray.join('');
    
}

