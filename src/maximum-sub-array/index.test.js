const maxSubArray = require('./index');

describe('maxSubArray', () => {
  it('should be a function', () => {
    expect(maxSubArray).toBeInstanceOf(Function);
  });

  it('should return 6', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubArray(nums)).toEqual(6);
  });

  it('should return 1', () => {
    const nums = [1];
    expect(maxSubArray(nums)).toEqual(6);
  });

  it('should return 23', () => {
    const nums = [5, 4, -1, 7, 8];
    expect(maxSubArray(nums)).toEqual(23);
  });
});
