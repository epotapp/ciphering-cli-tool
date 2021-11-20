const { Transform } = require("stream");
const { atbashFunc } = require('../streamfunctions/atbash');

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


module.exports = Atbash;