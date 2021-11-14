const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { strictEqual } = require('assert');

const readable = createReadStream('./input.txt');
const writable = createWriteStream('./output.txt');

class Atbash extends Transform {
    
    constructor () {
        super({transform(chunk, encoding, callback) {

            const chunkStringified = chunk.toString();
    
            const transformedChunk = chunkStringified.split('').reverse().join('');

            callback(null, transformedChunk);
            } 
        });
    }

    

}


const atbash = new Atbash();

exports.atbash = atbash;

//  pipeline(
//      readable,
//      atbash,
//      writable,
//      (err) => {
//          throw new Error (`o_Oops! Error occured: ${err}`);
//      }
// )