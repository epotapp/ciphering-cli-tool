const { Transform } = require("stream");

function caesarFunc(str) {
  let array = str.split("");
  let transformedArray = [];

  for (i = 0; i < array.length; i++) {
    let inpLetterIndex = array[i].charCodeAt();

    if (
      (inpLetterIndex > 64 && inpLetterIndex < 90) ||
      (inpLetterIndex > 96 && inpLetterIndex < 122)
    ) {
      transformedArray.push(String.fromCharCode(inpLetterIndex + 1));
    } else if (inpLetterIndex == 90) {
      transformedArray.push("A");
    } else if (inpLetterIndex == 122) {
      transformedArray.push("a");
    } else transformedArray.push(array[i]);
  }

  return transformedArray.join("");
}

class TransCaesar extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString();
    const transformedChunk = caesarFunc(chunkStringified);

    this.push(transformedChunk);
    callback();
  }
}

//const caesar = new TransCaesar();
module.exports = TransCaesar;
//exports.caesar = new TransCaesar();
