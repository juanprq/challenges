const maxNum = (n, m, k) => {
  const digits = [...(new Set(
    n.concat(m)
  ))];
  const result = digits
    .sort()
    .reverse()
    .slice(0, k);

  return result
    .reduce((accum, value) => accum * 10 + value);
};

module.exports = maxNum;
