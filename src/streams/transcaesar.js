const { Transform } = require("stream");
const { caesarFunc } = require('../streamfunctions/caesar');

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


module.exports = TransCaesar;