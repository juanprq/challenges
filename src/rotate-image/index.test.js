const rotate = require('./index');

describe('rotate', () => {
  it('should be a function', () => {
    expect(rotate).toBeInstanceOf(Function);
  });

  it('should return a matrix 3x3', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    expect(rotate(input)).toEqual(result);
  });

  it('should return a matrix 4x4', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    expect(rotate(input)).toEqual(result);
  });
});
