const firstMissingPositive = require('./index');

describe('firstMissingPositive', () => {
  it('should be a function', () => {
    expect(firstMissingPositive).toBeInstanceOf(Function);
  });

  it('should return 3', () => {
    const nums = [1, 2, 0];
    expect(firstMissingPositive(nums)).toEqual(3);
  });

  it('should return 2', () => {
    const nums = [3, 4, -1, 1];
    expect(firstMissingPositive(nums)).toEqual(2);
  });

  it('should return 1', () => {
    const nums = [7, 8, 9, 11, 12];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('should return 1', () => {
    const nums = [];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('should return 1', () => {
    const nums = [-5];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('should return 2', () => {
    const nums = [1];
    expect(firstMissingPositive(nums)).toEqual(2);
  });
});
