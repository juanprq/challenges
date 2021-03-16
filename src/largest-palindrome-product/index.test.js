const largestPalindromeProduct = require('./index');

describe('largestPalindromeProduct', () => {
  it('should be a function', () => {
    expect(largestPalindromeProduct).toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    expect(typeof largestPalindromeProduct(2)).toBe('number');
  });

  it('should return 9009', () => {
    expect(largestPalindromeProduct(2)).toEqual(9009);
  });

  it('should return 906609', () => {
    expect(largestPalindromeProduct(3)).toEqual(906609);
  });
});
