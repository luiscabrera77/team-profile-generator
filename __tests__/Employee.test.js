const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
  const employee = new Employee('Dave',1,'dave@email.com');
  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toMatch(/@/);
  expect(employee.role).toBe('Employee');
});

test('get employee name', () => {
  const employee = new Employee('Dave',1,'dave@email.com');
  expect(employee.getName()).toBe('Dave');
});

test('get employee id', () => {
  const employee = new Employee('Dave',1,'dave@email.com');
  expect(employee.getId()).toBe(1);
});

test('get employee email', () => {
  const employee = new Employee('Dave',1,'dave@email.com');
  expect(employee.getEmail()).toBe('dave@email.com');
});

test('get employee role', () => {
  const employee = new Employee('Dave',1,'dave@email.com');
  expect(employee.getRole()).toBe('Employee');
});
