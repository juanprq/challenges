const removeDuplicates = require('./index');

describe('removeDuplicates', () => {
  it('should be a function', () => {
    expect(removeDuplicates).toBeInstanceOf(Function);
  });

  it('should return 2', () => {
    const nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toEqual(2);
    // expect(nums).toEqual([1, 2]);
  });

  it('should return 5', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(nums)).toEqual(5);
    // expect(nums).toEqual([0, 1, 2, 3, 4]);
  });
});
