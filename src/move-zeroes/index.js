const moveZeroes = (input) => {
  const zeroes = input.filter(v => v === 0);
  const nonZeroes = input.filter(v => v !== 0)

  return [...nonZeroes, ...zeroes];
};

module.exports = moveZeroes;
