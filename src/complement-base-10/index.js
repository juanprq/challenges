const complementOfBase10 = (n) => {
  let result = 0;
  let currentN = n;
  let currentMultiplier = 1;

  while (currentN) {
    const currentBit = currentN & 1;
    currentN = currentN >> 1;

    result += (1 - currentBit) * currentMultiplier;
    currentMultiplier *= 2;
  }

  return result;
};

module.exports = complementOfBase10;
