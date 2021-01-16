const countAndSay = require('./index');

describe('countAndSay', () => {
  it('should be a function', () => {
    expect(countAndSay).toBeInstanceOf(Function);
  });

  it('should return "1"', () => {
    expect(countAndSay(1)).toEqual('1');
  });

  it('should return "11"', () => {
    expect(countAndSay(2)).toEqual('11');
  });

  it('should return "21"', () => {
    expect(countAndSay(3)).toEqual('21');
  });

  it('should return "1211"', () => {
    expect(countAndSay(4)).toEqual('1211');
  });
});
