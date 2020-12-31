const romanToInt = require('./index');

describe('romanToInt', () => {
  it('should be a function', () => {
    expect(romanToInt).toBeInstanceOf(Function);
  });

  it('should return 3', () => {
    expect(romanToInt('III')).toEqual(3);
  });

  it('should return 4', () => {
    expect(romanToInt('IV')).toEqual(4);
  });

  it('should return 9', () => {
    expect(romanToInt('IX')).toEqual(9);
  });

  it('should return 58', () => {
    expect(romanToInt('LVIII')).toEqual(58);
  });

  it('should return 1994', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });
});
