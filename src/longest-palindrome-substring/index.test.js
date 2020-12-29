const longestPalindrome = require('./index');

describe('longestPalindrome', () => {
  it('should be a function', () => {
    expect(longestPalindrome).toBeInstanceOf(Function);
  });

  it('should return "bab"', () => {
    expect(longestPalindrome('babad')).toEqual('bab');
  });

  it('should return "bb"', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });

  it('should return "a"', () => {
    expect(longestPalindrome('a')).toEqual('a');
  });

  it('should return "a"', () => {
    expect(longestPalindrome('ac')).toEqual('a');
  });
});
