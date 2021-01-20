const permute = require('./index');

describe('permute', () => {
  it('should be a function', () => {
    expect(permute).toBeInstanceOf(Function);
  });

  it('should return 1 permutation', () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it('should return 2 permutations', () => {
    expect(permute([0, 1])).toEqual([[0, 1], [1, 0]]);
  });

  it('should return 6', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
