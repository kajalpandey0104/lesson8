const appOperations = require('../src/appOperations');

test('multiplying values', () => {
    expect(appOperations.multiply(5, 0)).toBe(0);
});

test('adding values', () => {
    expect(appOperations.add(5, 5)).toBe(10);
});