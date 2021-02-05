const addOne = (digits) => {
  let sum = 1;
  let i = digits.length - 1;

  while (sum !== 0 && i >= 0) {
    const current = digits[i] + sum;

    digits[i] = current % 10;
    sum = Math.floor(current / 10);
    i--;
  }

  if (sum > 0) {
    return [1, ...digits];
  }

  return digits;
};

module.exports = {
  addOne,
};
