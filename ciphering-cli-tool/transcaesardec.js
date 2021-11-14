const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { strictEqual } = require('assert');

const readable = createReadStream('./input.txt');
const writable = createWriteStream('./output.txt');

class TransCaesarDec extends Transform {
    
    constructor ( options = {} ) {
        super(options);
    }

    _transform(chunk, encoding, callback) {

        const chunkStringified = chunk.toString();

        const transformedChunk = caesarFunc(chunkStringified)

        callback(null, transformedChunk);

    } 

}


const caesardec = new TransCaesarDec(0);

exports.caesardec = caesardec;

//  pipeline(
//      readable,
//      caesardec,
//      writable,
//      (err) => {
//          throw new Error (`o_Oops! Error occured: ${err}`);
//      }
//  )
    
    
function caesarFunc (str) {
        
    let array = str.split('');
    let transformedArray = [];
    
    for (i = 0; i < array.length; i++) {
        
        let inpLetterIndex = array[i].charCodeAt();
        
        if ( ( (inpLetterIndex > 65) && (inpLetterIndex < 91 ) ) || ( (inpLetterIndex > 97) && (inpLetterIndex < 123) ) ) {
            transformedArray.push(String.fromCharCode(inpLetterIndex - 1));
            
        } else if (inpLetterIndex == 65) {
            transformedArray.push('Z');                
            
        } else if (inpLetterIndex == 97) {
            transformedArray.push('z');                
            
        } else transformedArray.push(array[i]);
    }   
    
    return transformedArray.join('');
    
}
    