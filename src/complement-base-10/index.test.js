const complementOfBase10 = require('./index');

describe('complementOfBase10', () => {
  it('should be a function', () => {
    expect(complementOfBase10).toBeInstanceOf(Function);
  });

  it('should return 2', () => {
    expect(complementOfBase10(5)).toEqual(2);
  });

  it('should return 0', () => {
    expect(complementOfBase10(7)).toEqual(0);
  });

  it('should return 5', () => {
    expect(complementOfBase10(10)).toEqual(5);
  });
});
