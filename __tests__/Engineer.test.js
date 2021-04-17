const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Luis',2,'luis@email.com','luiscabrera77');
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.role).toBe('Engineer');
});

test('get engineer github', () => {
  const engineer = new Engineer('Luis',2,'luis@email.com','luiscabrera77');
  expect(engineer.getGithub()).toBe('luiscabrera77');
});

test('get employee role', () => {
  const engineer = new Engineer('Luis',2,'luis@email.com','luiscabrera77');
  expect(engineer.getRole()).toBe('Engineer');
});