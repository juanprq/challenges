const mergeSort = require('./index');

describe('mergeSort', () => {
  it('should be a function', () => {
    expect(mergeSort).toBeInstanceOf(Function);
  });

  it('should sort an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should sort a one element array', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('should sort a two element array', () => {
    expect(mergeSort([19, 3])).toEqual([3, 19]);
  });

  it('should sort an array', () => {
    expect(mergeSort([3, 42, 2, 1, 39])).toEqual([1, 2, 3, 39, 42]);
  });

  it('should sort a long array', () => {
    expect(
      mergeSort([
        1,
        4,
        2,
        8,
        345,
        123,
        43,
        32,
        5643,
        63,
        123,
        43,
        2,
        55,
        1,
        234,
        92,
      ])
    ).toEqual([
        1,
        1,
        2,
        2,
        4,
        8,
        32,
        43,
        43,
        55,
        63,
        92,
        123,
        123,
        234,
        345,
        5643,
    ]);
  });
});
