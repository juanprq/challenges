const longestCommonPrefix = require('./index');

describe('longestCommonPrefix', () => {
  it('should be a function', () => {
    expect(longestCommonPrefix).toBeInstanceOf(Function);
  });

  it('should return "fl"', () => {
    const input = ['flower', 'flow', 'flight'];
    expect(longestCommonPrefix(input)).toEqual('fl');
  });

  it('should return ""', () => {
    const input = ['dog', 'racecar', 'car'];
    expect(longestCommonPrefix(input)).toEqual('');
  });

  it('should return ""', () => {
    const input = [];
    expect(longestCommonPrefix(input)).toEqual('');
  });

  it('should return "a"', () => {
    const input = ['a'];
    expect(longestCommonPrefix(input)).toEqual('a');
  });
});
