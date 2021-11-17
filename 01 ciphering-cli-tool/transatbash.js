const { Transform } = require("stream");

function atbashFunc(str) {
  let array = str.split("");
  let transformedArray = [];

  for (i = 0; i < array.length; i++) {
    let inpLetterIndex = array[i].charCodeAt();

    if (inpLetterIndex > 64 && inpLetterIndex < 91) {
      transformedArray.push(String.fromCharCode( (91 - (inpLetterIndex - 64))));
    
    }  else if (inpLetterIndex > 96 && inpLetterIndex < 123) {
        transformedArray.push(String.fromCharCode( (123 - (inpLetterIndex - 96))));
      } else transformedArray.push(array[i]);
  }

  return transformedArray.join("");
}

class Atbash extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString();

    const transformedChunk = atbashFunc(chunkStringified);
    this.push(transformedChunk);
    callback();
  }
}

//const atbash = new Atbash();
module.exports = Atbash;
//exports.atbash = new Atbash();
