const containsDuplicate = require('./index');

describe('containsDuplicate', () => {
  it('should be a function', () => {
    expect(containsDuplicate).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('should return false', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('should return true', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
  });
});
