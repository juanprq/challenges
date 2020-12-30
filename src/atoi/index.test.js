const atoi = require('./index');

describe('atoi', () => {
  it('should be a function', () => {
    expect(atoi).toBeInstanceOf(Function);
  });

  it('should return 42', () => {
    expect(atoi('42')).toEqual(42);
  });

  it('should return -42', () => {
    expect(atoi('   -42')).toEqual(-42);
  });

  it('should return 4193', () => {
    expect(atoi('4193 with words')).toEqual(4193);
  });

  it('should return 0', () => {
    expect(atoi('words and 987')).toEqual(0);
  });

  it('should return -2147483648', () => {
    expect(atoi('-91283472332')).toEqual(- Math.pow(2, 31));
  });

  it('should return 12345678', () => {
    expect(atoi('  0000000000012345678')).toEqual(12345678);
  });

  it('should return 2147483647', () => {
    expect(atoi('21474836460')).toEqual(2147483647)
  });

  it('shold return something', () => {
    expect(atoi('2147483648')).toEqual(2147483647);
  });
});
