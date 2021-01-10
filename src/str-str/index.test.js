const strStr = require('./index');

describe('strStr', () => {
  it('should be a function', () => {
    expect(strStr).toBeInstanceOf(Function);
  });

  it('should return 2', () => {
    expect(strStr('hello', 'll')).toEqual(2);
  });

  it('should return -1', () => {
    expect(strStr('aaaa', 'bba')).toEqual(-1);
  });

  it('should return 0', () => {
    expect(strStr('', '')).toEqual(0);
  });
});
