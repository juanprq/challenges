const smallestMult = require('./index');

describe('smallestMult', () => {
  it('should be a function', () => {
    expect(smallestMult).toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    expect(typeof smallestMult(5)).toBe('number');
  });

  it('should return 60', () => {
    expect(smallestMult(5)).toEqual(60);
  });

  it('should return 420', () => {
    expect(smallestMult(7)).toEqual(420);
  });

  it('should return 2520', () => {
    expect(smallestMult(10)).toEqual(2520);
  });

  it('should return 360360', () => {
    expect(smallestMult(13)).toEqual(360360);
  });

  it('should return 232792560', () => {
    expect(smallestMult(20)).toEqual(232792560);
  });
});
