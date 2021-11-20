const { rot8Func } = require('../../../src/streamfunctions/rot8');


test('aAbBcCzZ! becomes iIjJkKhH!', () => {
    const string = rot8Func('aAbBcCzZ!');
    expect(string).toEqual('iIjJkKhH!');
});