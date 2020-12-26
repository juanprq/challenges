const twoSum = require('./index');

describe('twoSum', () => {
  test('it should be a function', () => {
    expect(twoSum).toBeInstanceOf(Function);
  });

  test('it should return [0, 1]', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test('it should return [1, 2]', () => {
    const nums = [3, 2, 4];
    const target = 6;

    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  test('it should return [0, 1]', () => {
    const nums = [3, 3];
    const target = 6;

    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});
