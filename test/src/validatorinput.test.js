const InputValidator = require('../../src/validatorinput');

const mockProcessArgV = jest.fn(() => ["node", "my-ciphering-cli.js", "-c", "C1-R1-A", "-i", "input.txt", "-o", "output.txt"]);
const mockDirnameMaker = jest.fn(() => 'C:\\code\\learning\\rsnode\\02-jest-tests\\src\\')


describe('Incoming correct process.argv and returning path to input file', () => {
    const mockArray = mockProcessArgV();
    const mockDirname = mockDirnameMaker();
    const inputValidator = new InputValidator(mockArray);
    
    test('input path returns file', () => {
        inputValidator.validate();
        expect(inputValidator.path).toEqual(mockDirname + mockArray[5]);
    });

    test('input path existing', () => {
        inputValidator.validate();
        expect(inputValidator.existing).toEqual(1);
    });
    
});


const mockWrongInput = jest.fn(() => ["node", "my-ciphering-cli.js", "-c", "C1-R1-A", "-i", "inp", "-o", "output.txt"]);

describe('Incoming incorrect input path', () => {
    const mockArray = mockWrongInput();
    const inputValidator = new InputValidator(mockArray);

    // console.log(inputValidator.validate());
    // console.log(inputValidator.validate());
    // console.log(inputValidator.validate());
    
    test('wrong input path returns error', () => {
        expect( () => inputValidator.validate() ).toThrow(Error);
    });
    
});
