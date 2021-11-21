const configValidate = require('../../src/validatorconfig');


const mockProcArgVConfig = jest.fn(() => ["node", "my-ciphering-cli.js", "--config", "C1-R1-A", "-i", "input.txt", "-o", "output.txt"]);
const mockProcArgVC = jest.fn(() => ["node", "my-ciphering-cli.js", "-c", "C1-R1-A", "-i", "input.txt", "-o", "output.txt"]);

describe('Should return array with configuration', () => {
    const procArgvConfig = mockProcArgVConfig();
    const procArgvC = mockProcArgVC();
    
    test('Returns array from string after -c', () => {
        expect(Array.isArray(configValidate(procArgvConfig))).toEqual( true );
    });
    test('Returns array from string after --config', () => {
        expect(Array.isArray(configValidate(procArgvC))).toEqual( true );
    });

});


const mockDoubleConfig = jest.fn(() => ["node", "my-ciphering-cli.js", "--config", "C1-R1-A", "-i", "input.txt", "-o", "output.txt", "--config"]);
const mockDoubleC = jest.fn(() => ["node", "my-ciphering-cli.js", "-c", "C1-R1-A", "-i", "input.txt", "-o", "output.txt", "-c"]);

 describe('Should throw Error when double -c or --config', () => {
    const doubleConfigArgv = mockDoubleConfig();
    const doubleCArgv = mockDoubleC();
    test('throwing error if double --config', () => {
        expect( () => configValidate(doubleConfigArgv) ).toThrow(Error);
    });
    test('throwing error if double -c', () => {
        expect( () => configValidate(doubleCArgv) ).toThrow(Error);
    });
    
});


const mockNoConfig = jest.fn(() => ["node", "my-ciphering-cli.js", "-i", "input.txt", "-o", "output.txt"]);

describe('Should throwing Error when has not -c or --config', () => {
    const noCArgv = mockNoConfig();
    test('throwing error', () => {
        expect( () => configValidate(noCArgv) ).toThrow(Error);
    });
});
