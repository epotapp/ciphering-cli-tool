const { Transform } = require("stream");
const TransCaesar = require("./transcaesar");

function caesarDecFunc(str) {
  let array = str.split("");
  let transformedArray = [];

  for (i = 0; i < array.length; i++) {
    let inpLetterIndex = array[i].charCodeAt();

    if (
      (inpLetterIndex > 65 && inpLetterIndex < 91) ||
      (inpLetterIndex > 97 && inpLetterIndex < 123)
    ) {
      transformedArray.push(String.fromCharCode(inpLetterIndex - 1));
    } else if (inpLetterIndex == 65) {
      transformedArray.push("Z");
    } else if (inpLetterIndex == 97) {
      transformedArray.push("z");
    } else transformedArray.push(array[i]);
  }

  return transformedArray.join("");
}

class TransCaesarDec extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString();

    const transformedChunk = caesarDecFunc(chunkStringified);
    this.push(transformedChunk);

    callback();
  }
}

//const caesardec = new TransCaesarDec();
module.exports = TransCaesarDec;
//exports.caesardec = new TransCaesarDec();
