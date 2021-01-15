const countAndSay = require('./index');

describe('countAndSay', () => {
  it('should be a function', () => {
    expect(countAndSay).toBeInstanceOf(Function);
  });

  it('should return "1"', () => {
    expect(countAndSay(1)).toEqual('1');
  });

  it('should return "1211"', () => {
    expect(countAndSay(4)).toEqual('1211');
  });
});
