const generateParenthesis = (n) => {
  const results = [];

  const generate = (accum = '', open = 0) => {
    const length = accum.length;
    if (open < 0 || open > n) return;
    if (length === n * 2) {
      if (open === 0 && accum.charAt(length - 1) === ')') {
        results.push(accum);
      }
      return;
    }

    generate(accum + '(', open + 1);
    generate(accum + ')', open - 1);
  };
  generate();

  return results;
};

module.exports = generateParenthesis;
