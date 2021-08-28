const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('worker');
  
    expect(intern.name).toBe('worker');
    expect(intern.value).toEqual(expect.any(Number));
  });