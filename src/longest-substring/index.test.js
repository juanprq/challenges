const lengthOfLongestSubstring = require('./index');

describe('longestSubstring', () => {
  test('it should be a function', () => {
    expect(lengthOfLongestSubstring).toBeInstanceOf(Function);
  });

  test('it should return 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  test('it should return 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  test('it should return 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  test('it should return 0', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
  });
});
