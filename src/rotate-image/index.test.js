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
      [5,  1,  9,  11],
      [2,  4,  8,  10],
      [13, 3,  6,  7],
      [15, 14, 12, 16],
    ];
    const result = [
      [15, 13,2,  5],
      [14, 3, 4,  1],
      [12, 6, 8,  9],
      [16, 7, 10, 11],
    ];

    expect(rotate(input)).toEqual(result);
  });

  it('should return a matrix 1x1', () => {
    const input = [[1]];
    const result = [[1]];

    expect(rotate(input)).toEqual(result);
  });

  it('should return a matrix 2 x 2', () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const result = [
      [3, 1],
      [4, 2],
    ];

    expect(rotate(input)).toEqual(result);
  });
});
