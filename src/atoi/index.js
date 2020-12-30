const MAX = Math.pow(2, 31) - 1;
const MIN = -1 * Math.pow(2, 31);

const myAtoi = (string) => {
  const regex = /^\s*(?<symbol>[+-]?)(?<number>\d+).*$/g;

  const match = regex.exec(string);
  if (!match) return 0;

  const { groups: { number, symbol } } = match;
  let negative = 1;

  if (symbol === '-') {
    negative = -1;
  }

  let result = 0;
  for (let i = 0; i < number.length; i++) {
    const digit = number.charAt(i);

    const power = Math.pow(10, number.length - i - 1);
    result = result + digit * power;
  }

  result = result * negative;
  result = Math.min(result, MAX);
  result = Math.max(result, MIN);
  return result;
};

module.exports = myAtoi;
