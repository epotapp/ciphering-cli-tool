const { pipeline: pipelinePromisified } = require('stream/promises');
const { pipeline } = require('stream');

const fs = require('fs');
const path = require('path');

const { createReadStream } = require('fs');
const { createWriteStream } = require('fs');


const { streamMap } = require('./configDecoder');
const { stderr } = require('process');


const inputPath = path.resolve(__dirname, './input.txt');
const readable = createReadStream(inputPath);

const outputPath = path.resolve(__dirname, './output.txt');
const writable = createWriteStream(outputPath);

// streamArray.unshift(readable);
// streamArray.push(writable);
// const procError = processError();
// streamArray.push(procError);


// /* function processData (streams) {
//     pipeline(
//         readable,
//         streams
//     )    
// } */
    
// function processError (err) {
//     throw new Error (`o_Oops! Error occured: ${err}`);
// }

// console.log(streamArray[0]);
// console.log(streamArray[1]);
// console.log(streamArray[2]);
// console.log(streamArray[3]);
// console.log(streamArray[4]);
// console.log(streamArray[5]);

 for (let code of streamMap.values()) {
     console.log ( streamMap.get(code) );
}

pipeline(
    readable,
    
    writable,
    (error) => { if (error) throw error }
);
    
    
    
// console.log(readable);
// console.log(streamArray);
// console.log(writable);    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

/*
    const cipheringMainFunction = async(...streamArray) => {
        try {
            
            if (!inputPath) readable = process.stdin;
            if (!outputPath) writable = process.stdout;
    
            await pipelinePromisified(
                readable,
                ...streamArray,
                writable,
                );  
                console.log('Success!');
        
        } catch(err) {
                console.error(`Error occured: ${err}`);
        
        } finally {
                console.log('Do something in the end');
        }
    }
    
        
    cipheringMainFunction(); */