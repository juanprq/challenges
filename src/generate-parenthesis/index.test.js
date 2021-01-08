const generateParenthesis = require('./index');

describe('generateParenthesis', () => {
  it('should be a function', () => {
    expect(generateParenthesis).toBeInstanceOf(Function);
  });

  it('should return 5 combinations', () => {
    expect(generateParenthesis(3)).toEqual(
      ['((()))', '(()())', '(())()', '()(())', '()()()'],
    );
  });

  it('should return 1 combination', () => {
    expect(generateParenthesis(1)).toEqual(
      ['()'],
    );
  });
});
