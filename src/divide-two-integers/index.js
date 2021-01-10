const MAX = 2**31 - 1;
const MIN = 0 - 2**31;

const divide = (dividend, divisor) => {
  const negativeDividend = dividend < 0 ? -1 : 1;
  const negativeDivisor = divisor < 0 ? -1 : 1;

  let currentDividend = dividend < 0 ? 0 - dividend : dividend;
  let currenDivisor = divisor < 0 ? 0 - divisor : divisor;

  let result = 0;
  while (currentDividend >= currenDivisor) {
    currentDividend -= currenDivisor;
    result++;
  }

  if (negativeDividend + negativeDivisor === 0) {
    return Math.max(0 - result, MIN);
  }

  return Math.min(MAX, result);
};

module.exports = divide;
