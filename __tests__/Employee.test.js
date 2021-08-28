const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('worker');
  
    expect(employee.name).toBe('worker');
    expect(employee.value).toEqual(expect.any(Number));
  });