const MAX = Math.pow(2, 31) - 1;
const MIN = -1 * Math.pow(2, 31);

const reverseInteger = (number) => {
  let negative = number < 0 ? -1 : 1;
  let reminder = number * negative;
  let result = 0;

  while (reminder > 0) {
    const digit = reminder % 10;
    if (result > MAX / 10 || (result === MAX / 10 && digit > 7)) return 0;
    if (result < MIN / 10 || (result === MIN / 10) && digit < -8) return 0;

    result = result * 10 + digit;
    reminder = Math.floor(reminder / 10);
  }

  return result * negative;
};

module.exports = reverseInteger;
