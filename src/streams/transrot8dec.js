const { Transform } = require("stream");
const { rot8DecFunc } = require("../streamfunctions/rot8dec");

class TransRot8Dec extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString();

    const transformedChunk = rot8DecFunc(chunkStringified);
    this.push(transformedChunk);
    callback();
  }
}


module.exports = TransRot8Dec;