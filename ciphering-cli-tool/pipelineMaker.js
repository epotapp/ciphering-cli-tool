 const { pipeline: pipelinePromisified } = require('stream/promises');
//const { pipeline } = require('stream');


const fs = require('fs');
const path = require('path');

const { createReadStream } = require('fs');
const { createWriteStream } = require('fs');


const { streamArray } = require('./configDecoder');

// const { readable } = require('./streamRead');
// const { writable } = require('./streamWrite');

const inputPath = path.resolve(__dirname, './input.txt');
const readable = createReadStream(inputPath);

const outputPath = path.resolve(__dirname, './output.txt');
const writable = createWriteStream(outputPath);


streamArray.push(writable);
// const procError = processError();
// streamArray.push(procError);


/* function processData (streams) {
    pipeline(
        readable,
        streams
    )    
} */
    
// function processError (err) {
//     throw new Error (`o_Oops! Error occured: ${err}`);
// }



const processData = async () => {
    try {
        await pipelinePromisified(
            createReadStream('./input.txt'),
            ...streamArray
            );  
            console.log('Success!');
    } catch(err) {
            console.error(`Error occured: ${err}`);
    } finally {
            console.log('Do something in the end (Linkin Park)')
    }
}
    
    
processData(...streamArray);




























// exports.processData = processData();