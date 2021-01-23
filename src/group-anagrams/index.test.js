const groupAnagrams = require('./index');

describe('groupAnagrams', () => {
  it('should be a function', () => {
    expect(groupAnagrams).toBeInstanceOf(Function);
  });

  it('should return 3 groups', () => {
    const input = ['geat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

    expect(groupAnagrams(input)).toEqual(result);
  });

  it('should return 1 empty group', () => {
    const input = [''];
    const result = [['']];

    expect(groupAnagrams(input)).toEqual(result);
  });

  it('should return 1 group', () => {
    const input = ['a'];
    const result = [['a']];

    expect(groupAnagrams(input)).toEqual(result);
  });
})
