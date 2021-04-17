const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
  const manager = new Manager('Luis',2,'luis@email.com','A202');
  expect(manager.officeNumber).toEqual(expect.any(String));
  expect(manager.role).toBe('Manager');
});

test('get Manager Office', () => {
  const manager = new Manager('Luis',2,'luis@email.com','A202');
  expect(manager.getOfficeNumber()).toBe('A202');
});

test('get intern role', () => {
  const manager = new Manager('Luis',2,'luis@email.com','A202');
  expect(manager.getRole()).toBe('Manager');
});
