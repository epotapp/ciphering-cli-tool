const { atbashFunc } = require('../../../src/streamfunctions/atbash');

test('aBc! becomes zYx!', () => {
    const string = atbashFunc('aBc!');
    expect(string).toEqual('zYx!');
});
