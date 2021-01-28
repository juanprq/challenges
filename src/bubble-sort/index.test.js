const bubbleSort = require('./index');

describe('bubbleSort', () => {
  it('should be a function', () => {
    expect(bubbleSort).toBeInstanceOf(Function);
  });

  it('should sort', () => {
    expect(bubbleSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
