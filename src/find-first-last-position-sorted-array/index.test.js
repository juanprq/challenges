const searchRange = require('./index');

describe('searchRange', () => {
  it('should be a function', () => {
    expect(searchRange).toBeInstanceOf(Function);
  });

  it('should return [3, 4]', () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 8;

    expect(searchRange(nums, target)).toEqual([3, 4]);
  });

  it('should return [3, 4]', () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 6;

    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });

  it('should return [3, 4]', () => {
    const nums = [];
    const target = 0;

    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });
});
