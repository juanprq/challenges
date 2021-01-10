const divide = require('./index');

describe('divide', () => {
  it('should be a function', () => {
    expect(divide).toBeInstanceOf(Function);
  });

  it('should return 3', () => {
    expect(divide(10, 3)).toEqual(3);
  });

  it('should return -2', () => {
    expect(divide(7, -3)).toEqual(-2);
  });

  it('should return 0', () => {
    expect(divide(0, 1)).toEqual(0);
  });

  it('should return 1', () => {
    expect(divide(1, 1)).toEqual(1);
  });
});
