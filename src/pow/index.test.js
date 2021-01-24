const myPow = require('./index');

describe('myPow', () => {
  it('should be a function', () => {
    expect(myPow).toBeInstanceOf(Function);
  });

  it('should return 1024.00000', () => {
    expect(myPow(2.0, 10)).toEqual(1024.0);
  });

  it('should return 9.26100', () => {
    expect(myPow(2.1, 3)).toEqual(9.26100);
  });

  it('should return 0.25', () => {
    expect(myPow(2.0, -2)).toEqual(0.25);
  });
});
