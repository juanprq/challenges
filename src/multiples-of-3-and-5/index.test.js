const multiplesOf3And5 = require('./index');

describe('multiplesOf3And5', () => {
  it('should be a function', () => {
    expect(multiplesOf3And5).toBeInstanceOf(Function);
  });

  it('should return 23', () => {
    expect(multiplesOf3And5(10)).toEqual(23);
  });
});

