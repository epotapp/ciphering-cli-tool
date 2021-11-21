const { stderr, stdin, stdout} = require("process");
const configDecoder = require('../../src/configDecoder');

//const mockValidatorConfig = jest.fn( () => ["C1", "C0", "A", "R1", "R0"] );
const mockInput = jest.fn( () => ["node", "my_ciphering_cli", "-c", "C1-C0-A-R1-R0", "-i", "input.txt", "-o", "output.txt"])

describe('Should take config array and return array full of streams', () => {

    const argv = mockInput();
    configValidate(argv);
    //configArray = mockValidatorConfig();
    streamArray = configDecoder();

    console.log(configArray);
    console.log(configDecoder(configArray));

    test('Returns streamArray', () => {
        expect( () => toString(streamArray) ).toEqual('[caesar, caesardec, atbash, rot8, rot8dec]');
    });
    
/*
    it('tests', function(done) {
        process.stdin.once('C1-C0-A-R1-R0', function(input) {
          expect(input.toString('utf-8')).to.eq('C1-C0-A-R1-R0');
          done();
        });
      });
*/
});