const moveZeroes = require('./index');

describe('moveZeroes', () => {
  it('should be a function', () => {
    expect(moveZeroes).toBeInstanceOf(Function);
  });

  it('should move the zeroes to the right', () => {
    const input = [0,2,0,3,8];

    expect(moveZeroes(input)).toEqual([2,3,8,0,0]);
  });
});
