const { Transform } = require('stream');

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
