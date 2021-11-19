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

//const caesardec = new TransCaesarDec();
module.exports = TransCaesarDec;
//exports.caesardec = new TransCaesarDec();
