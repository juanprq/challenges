const combinationSum = require('./index');

describe('combinationSum', () => {
  it('should be a function', () => {
    expect(combinationSum).toBeInstanceOf(Function);
  });

  it('should return 2 results', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;

    const result = combinationSum(candidates, target);
    expect(result).toEqual([[2, 2, 3], [7]]);
  });

  it('should return 3 results', () => {
    const candidates = [2, 3, 5];
    const target = 8;

    const result = combinationSum(candidates, target);
    expect(result).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
  });

  it('should return 0 results', () => {
    const candidates = [2];
    const target = 1;

    const result = combinationSum(candidates, target);
    expect(result).toEqual([]);
  });

  it('should return 1 result', () => {
    const candidates = [1];
    const target = 1;

    const result = combinationSum(candidates, target);
    expect(result).toEqual([[1]]);
  });

  it('should return 2 results', () => {
    const candidates = [1];
    const target = 2;

    const result = combinationSum(candidates, target);
    expect(result).toEqual([[1, 1]]);
  });
});
