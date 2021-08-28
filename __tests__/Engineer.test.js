const Employee = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Employee('worker');
  
    expect(engineer.name).toBe('worker');
    expect(engineer.value).toEqual(expect.any(Number));
  });