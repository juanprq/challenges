const generateParentheses = require('./index');

describe('generateParentheses', () => {
  it('should be a function', () => {
    expect(generateParentheses).toBeInstanceOf(Function);
  });

  it('should return 5 combinations', () => {
    expect(generateParentheses(3)).toEqual(
      ['((()))', '(()())', '(())()', '()(())', '()()()'],
    );
  });

  it('should return 1 combination', () => {
    expect(generateParentheses(1)).toEqual(
      ['()'],
    );
  });
});
