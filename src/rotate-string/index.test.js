const rotateString = require('./index');

describe('rotateString', () => {
  it('should be a function', () => {
    expect(rotateString).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    const s = 'abcde';
    const goal = 'cdeab';

    expect(rotateString(s, goal)).toBe(true);
  });

  it('should return false', () => {
    const s = 'abcde';
    const goal = 'abced';

    expect(rotateString(s, goal)).toBe(false);
  });

  it('should return true', () => {
    const s = '';
    const goal = '';

    expect(rotateString(s, goal)).toBe(true);
  });

  it('should return true', () => {
    const s = 'adrwt';
    const goal = s;

    expect(rotateString(s, goal)).toBe(true);
  });
});
