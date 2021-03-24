const kDiff = require('./index');

describe('kDiff', () => {
  it('should be a function', () => {
    expect(kDiff).toBeInstanceOf(Function);
  });

  it('should return 2 pairs', () => {
    const nums = [3, 1, 4, 1, 5];
    const k = 2;

    expect(kDiff(nums, k)).toEqual(2);
  });

  it('should return 4', () => {
    const nums = [1, 2 ,3 ,4, 5];
    const k = 1;

    expect(kDiff(nums, k)).toEqual(4);
  });

  it('should return 1', () => {
    const nums = [1, 3, 1, 5, 4];
    const k = 0;

    expect(kDiff(nums, k)).toEqual(1);
  });

  it('should return 2', () => {
    const nums = [1, 2, 4, 4, 3, 3, 0, 9, 2, 3];
    const k = 3;

    expect(kDiff(nums, k)).toEqual(2);
  });

  it('should return 2', () => {
    const nums = [-1, -2, -3];
    const k = 1;

    expect(kDiff(nums, k)).toEqual(2);
  });
});
