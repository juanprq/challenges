const MAX = Math.pow(2, 31) - 1;
const MIN = -1 * Math.pow(2, 31);

const myAtoi = (string) => {
  const regex = /^\s*(?<number>[+-]?\d+).*$/g;

  const match = regex.exec(string);
  if (!match) return 0;

  const { groups: { number } } = match;
  let result = parseInt(number, 10);
  result = Math.min(MAX, result);
  result = Math.max(MIN, result);

  return result;
};

module.exports = myAtoi;
