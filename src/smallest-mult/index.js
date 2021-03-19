const smallestMult = (n) => {
  let maxI = 1;
  for (let j = 2; j < n; j++) {
    maxI *= j;
  }

  let result;
  let i = 1;
  while (!result && i <= maxI) {
    const currentValue = n * i;

    for (let j = 2; j < n; j++) {
      if (currentValue % j !== 0) break;
      if (j === n - 1) result = currentValue;
    }

    i++;
  }

  return result;
};

module.exports = smallestMult;
