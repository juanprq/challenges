const letterCombinations = require('./index');

describe('letterCombinations', () => {
  it('should be a function', () => {
    expect(letterCombinations).toBeInstanceOf(Function);
  });

  it('should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
    const result = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(letterCombinations('23')).toEqual(result);
  });

  it('should return []', () => {
    const result = [];
    expect(letterCombinations('')).toEqual(result);
  });

  it('should return ["a", "b", "c"]', () => {
    const result = ['a', 'b', 'c'];
    expect(letterCombinations('2')).toEqual(result);
  });
});
