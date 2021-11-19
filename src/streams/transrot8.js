const { Transform } = require("stream");
const { rot8Func } = require('../streamfunctions/rot8');


class TransRot8 extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString();

    const transformedChunk = rot8Func(chunkStringified);
    this.push(transformedChunk);
    callback();
  }
}


module.exports = TransRot8;