const reverseInteger = (number) => {
  let negative = number < 0 ? -1 : 1;
  let reminder = number * negative;
  let result = 0;

  while (reminder > 0) {
    const digit = reminder % 10;
    result = result * 10 + digit;
    reminder = Math.floor(reminder / 10);
  }

  if (result < - Math.pow(2, 31) || result > Math.pow(2, 31) - 1) return 0;
  return result * negative;
};

module.exports = reverseInteger;
