const maxSumOfK = require('./index');

describe('maxSumOfK', () => {
  it('should be a function', () => {
    expect(maxSumOfK).toBeInstanceOf(Function);
  });

  it('should return 700', () => {
    const input = [100, 200, 300, 400];
    const k = 2;

    expect(maxSumOfK(input, k)).toEqual(700);
  });

  it('should return 39', () => {
    const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const k = 4;

    expect(maxSumOfK(input, k)).toEqual(39);
  });
});
