const { caesarDecFunc } = require('../../../src/streamfunctions/caesardec');


test('aAbBcCzZ! becomes zZaAbByY!', () => {
    const string = caesarDecFunc('aAbBcCzZ!');
    expect(string).toEqual('zZaAbByY!');
});