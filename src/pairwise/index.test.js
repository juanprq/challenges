const pairwise = require('./index');

describe('pairwise', () => {
  it('should be a function', () => {
    expect(pairwise).toBeInstanceOf(Function);
  });

  it('should return 11', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toEqual(11);
  });

  it('should return 1', () => {
    expect(pairwise([1, 3, 2, 4], 4)).toEqual(1);
  });

  it('should return 1', () => {
    expect([1, 1, 1], 2).toEqual(1);
  });

  it('should return 10', () => {
    expect([0, 0, 0, 0, 1, 1], 1).toEqual(10);
  });

  it('should return 0', () => {
    expect([], 100).toEqual(0);
  });
});
