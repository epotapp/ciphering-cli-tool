const { rot8DecFunc } = require('../../../src/streamfunctions/rot8dec');


test('aAbBcCzZ! becomes sStTuUrR!', () => {
    const string = rot8DecFunc('aAbBcCzZ!');
    expect(string).toEqual('sStTuUrR!');
});