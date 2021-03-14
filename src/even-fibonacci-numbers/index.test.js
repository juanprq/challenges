const fiboEvenSum = require('./index');

describe(fiboEvenSum, () => {
  it('should be a function', () => {
    expect(fiboEvenSum).toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    expect(typeof fiboEvenSum(10)).toBe('number');
  });

  it('should return an even value', () => {
    expect(fiboEvenSum(10) % 2).toEqual(0);
  });

  it('should return 10', () => {
    expect(fiboEvenSum(8)).toEqual(10);
  });

  it('should return 10', () => {
    expect(fiboEvenSum(10)).toEqual(10);
  });

  it('should return 44', () => {
    expect(fiboEvenSum(34)).toEqual(44)
  });

  it('should return 44', () => {
    expect(fiboEvenSum(60)).toEqual(44)
  });

  it('should return 798', () => {
    expect(fiboEvenSum(1000)).toEqual(798);
  });

  it('should return 60696', () => {
    expect(fiboEvenSum(100000)).toEqual(60696);
  });

  it('should return 4613732', () => {
    expect(fiboEvenSum(4000000)).toEqual(4613732);
  });
});
