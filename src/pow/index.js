const myPow = (base, exponent) => {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / myPow(base, exponent * -1);
  return base * myPow(base, exponent - 1);
};

module.exports = myPow;
