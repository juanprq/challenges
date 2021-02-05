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

const addX = (digits, x) => {
  let sum = x;
  let i = digits.length - 1;

  while (sum !== 0 && i >= 0) {
    const current = digits[i] + sum;

    digits[i] = current % 10;
    sum = Math.floor(current / 10);
    i--;
  }

  if (sum > 0) {
    return [sum, ...digits];
  }

  return digits;
};

const add = (digitsA, digitsB) => {
  digitsA.reverse();
  digitsB.reverse();

  const n = Math.max(digitsA.length, digitsB.length);
  const result = new Array(n);
  let carry = 0;

  for (let i = 0; i < n; i++) {
    const current = (digitsA[i] || 0) + (digitsB[i] || 0) + carry;
    result[i] = current % 10;
    carry = Math.floor(current / 10);
  }

  if (carry > 0) result.push(carry);

  return result.reverse();
};

module.exports = {
  addOne,
  addX,
  add,
};
