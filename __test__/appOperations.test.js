const appOperations = require('../src/appOperations');

test('multiplying values', () => {
    expect(appOperations.multiply(5, 0)).toBe(0);
});