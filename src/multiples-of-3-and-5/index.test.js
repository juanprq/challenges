const multiplesOf3And5 = require('./index');

describe('multiplesOf3And5', () => {
  it('should be a function', () => {
    expect(multiplesOf3And5).toBeInstanceOf(Function);
  });

  it('should return 23', () => {
    expect(multiplesOf3And5(10)).toEqual(23);
  });

  it('should return 543', () => {
    expect(multiplesOf3And5(49)).toEqual(543);
  });

  it('should return 233268', () => {
    expect(multiplesOf3And5(1000)).toEqual(233168);
  });

  it('should return 16687353', () => {
    expect(multiplesOf3And5(8456)).toEqual(16687353);
  });

  it('should return 89301283', () => {
    expect(multiplesOf3And5(19564)).toEqual(89301183);
  });

});

