const threeSum = require('./index');

describe('threeSum', () => {
  it('should be a function', () => {
    expect(threeSum).toBeInstanceOf(Function);
  });

  it('should return [[-1, -1, 2], [-1, 0, 1]]', () => {
    const input = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(input)).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });

  it('should return []', () => {
    expect(threeSum([])).toEqual([]);
  });

  it('should return []', () => {
    expect(threeSum([0])).toEqual([]);
  });

  it('should return [[0, 0, 0]]', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
