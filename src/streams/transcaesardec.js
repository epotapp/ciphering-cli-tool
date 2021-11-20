const { Transform } = require("stream");
const { caesarDecFunc } = require("../streamfunctions/caesardec");



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


module.exports = TransCaesarDec;