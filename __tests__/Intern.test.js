const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const intern = new Intern('Luis',2,'luis@email.com','UIC');
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toBe('Intern');
});

test('get intern school', () => {
  const intern = new Intern('Luis',2,'luis@email.com','UIC');
  expect(intern.getSchool()).toBe('UIC');
});

test('get intern role', () => {
  const intern = new Intern('Luis',2,'luis@email.com','UIC');
  expect(intern.getRole()).toBe('Intern');
});