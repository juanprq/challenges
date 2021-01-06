const isValid = require('./index');

describe('isValid', () => {
  it('should be a function', () => {
    expect(isValid).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isValid('()')).toBe(true);
  });

  it('should return true', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return false', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('should return false', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('shoul return true', () => {
    expect(isValid('{[]}')).toBe(true);
  });
});
