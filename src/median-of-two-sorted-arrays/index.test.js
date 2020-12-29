const findMedianSortedArrays = require('./index');

describe('medianOfTwoSortedArrays', () => {
  test('it should be a function', () => {
    expect(findMedianSortedArrays).toBeInstanceOf(Function);
  });

  test('it should return 2', () => {
    const a1 = [1, 3];
    const a2 = [2];

    expect(findMedianSortedArrays(a1, a2)).toEqual(2);
  });

  test('it should return 2.5', () => {
    const a1 = [1, 2];
    const a2 = [3, 4];

    expect(findMedianSortedArrays(a1, a2)).toEqual(2.5);
  });

  // test('it should return 0', () => {
  //   const a1 = [0];
  //   const a2 = [0];

  //   expect(findMedianSortedArrays(a1, a2)).toEqual(0);
  // });

  test('it should return 1', () => {
    const a1 = [];
    const a2 = [1];

    expect(findMedianSortedArrays(a1, a2)).toEqual(1);
  });

  test('it should return 2', () => {
    const a1 = [2];
    const a2 = [];

    expect(findMedianSortedArrays(a1, a2)).toEqual(2);
  });
});
