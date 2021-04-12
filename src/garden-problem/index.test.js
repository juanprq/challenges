const canPlant = require('./index');

describe('canPlant', () => {
  it('should be a function', () => {
    expect(canPlant).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    const garden = [1, 0, 0, 0, 1];

    expect(canPlant(garden, 1)).toBe(true);
  });

  it('should return false', () => {
    const garden = [1, 0, 0, 0, 1];

    expect(canPlant(garden, 4)).toBe(false);
  });
});
