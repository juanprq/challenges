const binarySearch = require('./index');

describe('binarySearch', () => {
  it('should be a function', () => {
    expect(binarySearch).toBeInstanceOf(Function);
  });

  it('should return 3', () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const target = 4;

    expect(binarySearch(nums, target)).toEqual(3);
  });

  it('should return 1', () => {
    const nums = [1, 2];
    const target = 2;

    expect(binarySearch(nums, target)).toEqual(1);
  });

  it('should return -1', () => {
    const nums = [1, 2];
    const target = 3;

    expect(binarySearch(nums, target)).toEqual(-1);
  });
});
