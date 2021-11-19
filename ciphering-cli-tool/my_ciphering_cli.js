// const { pipeline: pipelinePromisified } = require('stream/promises');
const fs = require('fs');
const { pipeline } = require("stream");

const { streamArray } = require("../src/configDecoder");
const { stderr, stdin, stdout} = require("process");

const { inputPath } = require('../src/pathvalidationInput');
const { outputPath } = require('../src/pathvalidationOutput');

const { createReadStream } = require("fs"); 
const { createWriteStream } = require("fs"); 


if (inputPath.existing) {
    var readable = createReadStream(inputPath.path);
} else readable = stdin;

if (outputPath.existing) {
    var writable = createWriteStream(outputPath.path, { flags: "a" });
} else writable = stdout;

// console.log(streamArray);


try {
        
    if ( !fs.existsSync(inputPath.path) && inputPath.existing ) throw  new Error ('Ошибка. Согласно документации проекта, исходный текст должен быть в файле input.txt, либо отсутствовать вовсе.')
    if ( !fs.existsSync(outputPath.path) && (outputPath.existing == 1) ) throw new Error ('Ошибка. Согласно документации проекта, зашифрованный текст должен помещаться в файл output.txt, либо выводиться в консоль.')

    pipeline(
        readable,
        ...streamArray,
        writable, 
        (err) => {
            if (err) {
                stderr.write(err);
                exit(1);
            }
        }
    );
    console.log('');
    console.log('Успешно зашифровано.');
    console.log('');
} catch(err) {
        console.error(err);
        process.exit(1);
} finally {
    console.log('Работа программы завершена. Спасибо за внимание.');
    console.log('');
}






/*
async function cipheringMainFunction (...streamArray) {
    try {
            if ( !(inputPath.path == (__dirname + `\\input.txt`) ) && (inputPath.existing == 1) ) throw new Error ('Ошибка. Согласно документации проекта, исходный текст должен быть в файле input.txt, либо отсутствовать вовсе.')
            if ( !(outputPath.path == (__dirname + `\\output.txt`) ) && (inputPath.existing == 1) ) throw new Error ('Ошибка. Согласно документации проекта, зашифрованный текст должен помещаться в файл output.txt, либо выводиться в консоль.')

        await pipelinePromisified(
            readable,
            ...streamArray,
            writable,
            );  
            console.log('Success!');
    
    } catch(err) {
            console.error(err);
            process.exit(1);
    
    } finally {
            console.log('Работа программы завершена. Спасибо за внимание.');
    }
    
}


cipheringMainFunction(); */   