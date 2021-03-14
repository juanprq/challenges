const largestPrimeFactor = require('./index');

describe('largestPrimeFactor', () => {
  it('should be a function', () => {
    expect(largestPrimeFactor).toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    expect(typeof largestPrimeFactor(10)).toBe('number');
  });

  it('should return 2', () => {
    expect(largestPrimeFactor(2)).toEqual(2);
  });

  it('should return 3', () => {
    expect(largestPrimeFactor(3)).toEqual(3);
  });

  it('should return 5', () => {
    expect(largestPrimeFactor(5)).toEqual(5);
  });

  it('should return 7', () => {
    expect(largestPrimeFactor(8)).toEqual(2);
  });

  it('should return 29', () => {
    expect(largestPrimeFactor(13195)).toEqual(29);
  });

  it('should return 6857', () => {
    expect(largestPrimeFactor(600851475143)).toEqual(6857);
  });
});
