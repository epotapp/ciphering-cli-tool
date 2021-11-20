const OutputValidator = require('../../src/validatoroutput');

const mockProcessArgV = jest.fn(() => ["node", "my-ciphering-cli.js", "-c", "C1-R1-A", "-i", "input.txt", "-o", "output.txt"]);
const mockDirnameMaker = jest.fn(() => 'C:\\code\\learning\\rsnode\\02-jest-tests\\src\\')


describe('Incoming correct process.argv and returning path to the output file', () => {
    const mockArray = mockProcessArgV();
    const mockDirname = mockDirnameMaker();
    const outputValidator = new OutputValidator(mockArray);
    
    test('input path returns file', () => {
        outputValidator.validate();
        expect(outputValidator.path).toEqual(mockDirname + mockArray[7]);
    });

    test('input path existing', () => {
        outputValidator.validate();
        expect(outputValidator.existing).toEqual(1);
    });
    
});


const mockWrongInput = jest.fn(() => ["node", "my-ciphering-cli.js", "-c", "C1-R1-A", "-i", "input.txt", "-o", "outWrong"]);

describe('Incoming incorrect input path', () => {
    const mockArray = mockWrongInput();
    const outputValidator = new OutputValidator(mockArray);

    // console.log(inputValidator.validate());
    // console.log(inputValidator.validate());
    // console.log(inputValidator.validate());
    
    test('wrong input path returns error', () => {
        expect( () => outputValidator.validate() ).toThrow(Error);
    });
    
});
