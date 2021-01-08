const generateParenthesis = (n) => {
  const results = [];

  const generate = (accum = '', open = 0, close = 0) => {
    const length = accum.length;
    if (length === n * 2) {
      results.push(accum);
      return;
    }

    if (open < n) generate(accum + '(', open + 1, close);
    if (open > close) generate(accum + ')', open, close + 1);
  };
  generate();

  return results;
};

module.exports = generateParenthesis;
