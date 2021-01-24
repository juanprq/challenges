const balanceCandyBars = require('./index');

describe('balanceCandyBars', () => {
  it('should be a function', () => {
    expect(balanceCandyBars).toBeInstanceOf(Function);
  });

  it('should return [[7, 5], [3, 1]]', () => {
    const alice = [7, 3, 6, 4];
    const bob = [6, 1, 5];

    expect(balanceCandyBars(alice, bob)).toEqual([[7, 5], [3, 1]]);
  });
});
