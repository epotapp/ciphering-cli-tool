const { caesarFunc } = require('../../../src/streamfunctions/caesar');


test('aAbBcCzZ! becomes bBcCdDaA!', () => {
    const string = caesarFunc('aAbBcCzZ!');
    expect(string).toEqual('bBcCdDaA!');
});
