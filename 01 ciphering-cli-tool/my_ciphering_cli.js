// const { pipeline: pipelinePromisified } = require('stream/promises');
const { pipeline } = require("stream");

const fs = require("fs");
const path = require("path");

const { streamArray } = require("./configDecoder");
const { stderr, stdin, stdout} = require("process");


const { inputPath } = require('./pathvalidationInput');
const { outputPath } = require('./pathvalidationOutput');

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
        
    if ( !(inputPath.path == (__dirname + `\\input.txt`) ) && inputPath.existing ) throw  new Error ('Ошибка. Согласно документации проекта, исходный текст должен быть в файле input.txt, либо отсутствовать вовсе.')
    if ( !(outputPath.path == (__dirname + `\\output.txt`) ) && (outputPath.existing == 1) ) throw new Error ('Ошибка. Согласно документации проекта, зашифрованный текст должен помещаться в файл output.txt, либо выводиться в консоль.')

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
    console.log('Успешно зашифровано. Результат находится в файле "\\output.txt".');
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