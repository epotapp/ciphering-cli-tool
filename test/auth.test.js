const { expect }= require('@jest/globals');
const { authenticate } = require('../src/auth');


test('should name have Ivan', () => {
    const { userName } = authenticate ();
    expect(userName).toBe('ivan');
});