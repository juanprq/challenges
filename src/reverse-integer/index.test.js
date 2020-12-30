const reverseInteger = require('./index');

describe('reverseInteger', () => {
  it('should be a function', () => {
    expect(reverseInteger).toBeInstanceOf(Function);
  });

  it('should return 321', () => {
    expect(reverseInteger(123)).toEqual(321);
  });

  it('should return -321', () => {
    expect(reverseInteger(-123)).toEqual(-321);
  });

  it('should return 21', () => {
    expect(reverseInteger(120)).toEqual(21);
  });

  it('should return 0', () => {
    expect(reverseInteger(0)).toEqual(0);
  });

  it('should return 0', () => {
    expect(reverseInteger(1534236469)).toEqual(0);
  });
});
