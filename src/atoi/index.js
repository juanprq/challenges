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
    const digit = number.charCodeAt(i) - '0'.charCodeAt(0);

    if (result > MAX / 10 || (result === Math.floor(MAX / 10) && digit > MAX % 10)) {
      return negative === -1 ? MIN : MAX;
    }

    result = result * 10 + digit;
  }

  return result * negative;
};

module.exports = myAtoi;
