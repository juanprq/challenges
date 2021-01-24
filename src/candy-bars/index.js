const balanceCandyBars = (candiesA, candiesB) => {
  const sum = (a, b) => a + b;
  const sumA = candiesA.reduce(sum);
  const sumB = candiesB.reduce(sum);

  const target = (sumA - sumB) / 2;

  let result = [];
  candiesA.forEach(candyA => {
    candiesB.forEach(candyB => {
      if (candyA - candyB === target) {
        result.push([candyA, candyB]);
      }
    });
  });

  return result;
};

module.exports = balanceCandyBars;
