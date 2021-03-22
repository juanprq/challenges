const maxNum = require('./index');

describe('maxNum', () => {
  it('should be a function', () => {
    expect(maxNum).toBeInstanceOf(Function);
  });

  it('should return 98654', () => {
    const n = [3, 4, 6, 5];
    const m = [9, 0, 2, 5, 8, 3];
    const k  = 5;

    expect(maxNum(n, m, k)).toEqual(98654);
  });
});
