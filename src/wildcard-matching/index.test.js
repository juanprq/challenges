const isMatch = require('./index');

describe('isMatch', () => {
  it('should be a function', () => {
    expect(isMatch).toBeInstanceOf(Function);
  });

  it('should return false', () => {
    const s = 'aa';
    const p = 'a';

    expect(isMatch(s, p)).toBe(false);
  });

  it('should return true', () => {
    const s = 'aa';
    const p = '*';

    expect(isMatch(s, p)).toBe(true);
  });

  it('should return false', () => {
    const s = 'cb';
    const p = '?a';

    expect(isMatch(s, p)).toBe(false);
  });

  it('should return true', () => {
    const s = 'adceb';
    const p = '*a*b';

    expect(isMatch(s, p)).toBe(true);
  });

  it('should return false', () => {
    const s = 'acdcb';
    const p = 'a*c?b';

    expect(isMatch(s, p)).toBe(false);
  });

  it('should return false', () => {
    const s = '';
    const p = '******';

    expect(isMatch(s, p)).toBe(true);
  });

  it('should return true', () => {
    const s = 'aaabababaaabaababbbaaaabbbbbbabbbbabbbabbaabbababab';
    const p = '*ab***ba**b*b*aaab*b';

    expect(isMatch(s, p)).toBe(true);
  });
});
