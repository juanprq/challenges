const canJump = require('./index');

describe('canJump', () => {
  it('should be a function', () => {
    expect(canJump).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it('should return false', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });
});
