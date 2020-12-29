const reverseInteger = (number) => {
  let negative = number < 0 ? -1 : 1;
  let reminder = number * negative;
  let result = 0;

  let counter = 0;

  while (reminder > 0) {
    const digit = reminder % 10;
    result = result * 10 + digit;
    reminder = Math.floor(reminder / 10);

    counter++;
    if (counter > 10) throw new Error('stop!');
  }

  return result * negative;
};

module.exports = reverseInteger;
