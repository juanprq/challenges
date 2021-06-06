const nextRound = require('./index');

describe('nextRound', () => {
  it('should be a function', () => {
    expect(nextRound).toBeInstanceOf(Function);
  });

  it('should return 6', () => {
    const k = 5;
    const input = [10, 9, 8, 7, 7, 7, 5, 5];

    expect(nextRound(k, input)).toBe(6);
  });

  it('should return 0', () => {
    const k = 2;
    const input = [0, 0, 0];

    expect(nextRound(k, input)).toBe(0);
  });
});
