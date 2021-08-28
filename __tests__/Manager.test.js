const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('worker');
  
    expect(manager.name).toBe('worker');
    expect(manager.value).toEqual(expect.any(Number));
});