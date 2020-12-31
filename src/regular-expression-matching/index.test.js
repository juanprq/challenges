const isMatch = require('./index');

describe('isMatch', () => {
  it('should be a function', () => {
    expect(isMatch).toBeInstanceOf(Function);
  });

  it('should return false', () => {
    expect(isMatch('aa', 'a')).toBe(false);
  });

  it('should return true', () => {
    expect(isMatcn('aa', 'a*')).toBe(true);
  });

  it('should return true', () => {
    expect(isMatch('ab', '.*')).toBe(true);
  });

  it('should return true', () => {
    expect(isMatch('aab', 'c*a*b*')).toBe(true);
  });

  it('should return false', () => {
    expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
  });

});
