const isValidNumber = require('./index');

describe('isValidNumber', () => {
  it('should be a function', () => {
    expect(isValidNumber).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isValidNumber('7')).toBe(true);
  });

  it('should return true', () => {
    expect(isValidNumber('0011')).toBe(true);
  });

  it('should return true', () => {
    expect(isValidNumber('+3.14')).toBe(true);
  });

  it('should return true', () => {
    expect(isValidNumber('4.')).toBe(true);
  });

  it('should return true', () => {
    expect(isValidNumber('-.9')).toBe(true);
  });

  it('should return true', () => {
    expect(isValidNumber('-123.456')).toBe(true);
  });

  it('should return true', () => {
    expect(isValidNumber('-0.1')).toBe(true);
  });

  it('should return false', () => {
    expect(isValidNumber('abc')).toBe(false);
  });

  it('should return false', () => {
    expect(isValidNumber('1a')).toBe(false);
  });

  it('should return false', () => {
    expect(isValidNumber('e8')).toBe(false);
  });

  it('should return false', () => {
    expect(isValidNumber('–6')).toBe(false);
  });

  it('should return false', () => {
    expect(isValidNumber('-+3')).toBe(false);
  });

  it('should return false', () => {
    expect(isValidNumber('95x54e53.')).toBe(false);
  });
});
