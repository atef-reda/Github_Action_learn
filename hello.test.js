const hello = require('./hello');

test('returns correct greeting', () => {
  expect(hello('Atef')).toBe('Hello, Atef!');
});
