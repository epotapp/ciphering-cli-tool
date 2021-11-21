const fs = require('fs');
const { pipeline } = require("stream");

const configDecoder = require("./src/configDecoder");
const { stderr, stdin, stdout} = require("process");

const { createReadStream } = require("fs"); 
const { createWriteStream } = require("fs"); 

const InputValidator = require('./src/validatorinput');
const OutputValidator = require('./src/validatoroutput');


const inputValidator = new InputValidator(process.argv);


const outputValidator = new OutputValidator(process.argv);



try {
    
    let streamArray = configDecoder();

    inputValidator.validate();
    outputValidator.validate();

    if (inputValidator.existing) {
        var readable = createReadStream(inputValidator.path);
    } else readable = stdin;

    if (outputValidator.existing) {
        var writable = createWriteStream(outputValidator.path, { flags: "a" });
    } else if (!outputValidator.truePath) {
        throw Error ('Неверное имя файла output')
    } else writable = stdout;

    pipeline(
        readable,
        ...streamArray,
        writable, 
        (err) => {
            if (err) {
                stderr.write(err);
                process.exit(1);
            }
        }
    );
    console.log('');
    console.log('Шифруется успешно.');
    console.log('');
} catch(err) {
        stderr.write(err.message);
        process.exit(1);
} 

