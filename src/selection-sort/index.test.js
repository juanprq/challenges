const selectionSort = require('./index');

describe('selectionSort', () => {
  it('should be a function', () => {
    expect(selectionSort).toBeInstanceOf(Function);
  });

  it('should sort an empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });

  it('should sort a one element array', () => {
    expect(selectionSort([1])).toEqual([1]);
  });

  it('should sort a two element array', () => {
    expect(selectionSort([19, 3])).toEqual([3, 19]);
  });

  it('should sort an array', () => {
    expect(selectionSort([3, 42, 2, 1, 39])).toEqual([1, 2, 3, 39, 42]);
  });
});
