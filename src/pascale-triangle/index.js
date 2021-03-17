const getRowPascaleTriangle = (n) => {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];

  const prev = getRowPascaleTriangle(n - 1);
  const sum = [];

  for (let i = 0; i < prev.length - 1; i++) {
    sum.push(prev[i] + prev[i + 1]);
  }

  return [1, ...sum, 1];
};

module.exports = getRowPascaleTriangle;
