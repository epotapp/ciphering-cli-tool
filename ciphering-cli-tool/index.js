//const { pipeline: pipelinePromisified } = require('stream/promises');
const { pipeline } = require('stream');

const fs = require('fs');
const path = require('path');

const { createReadStream } = require('fs');
const { createWriteStream } = require('fs');


const { streamArray } = require('./configDecoder');
const { stderr } = require('process');


const inputPath = path.resolve(__dirname, './input.txt');
const readable = createReadStream(inputPath);

const outputPath = path.resolve(__dirname, './output.txt');
const writable = createWriteStream(outputPath);




pipeline(
    readable,
    ...streamArray,
    writable,
    (error) => { if (error) throw error }
);
    
    

    
    
    
    
    
    
    

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