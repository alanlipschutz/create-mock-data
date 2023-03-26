import { Greeter } from '..';

describe('testing in index', () => {
  test('test example', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
  });
});
