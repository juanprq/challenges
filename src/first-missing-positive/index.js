const firstMissingPositive = (nums) => {
  const count = nums.reduce((accum, value) => ({ ...accum, [value]: true }), {});

  let min = Infinity;
  let max = -Infinity;
  nums.forEach(value => {
    max = Math.max(max, value);
    min = Math.min(min, value);
  });

  for (let i = 1; i < max; i++) {
    if (!count[i]) return i;
  }

  return max + 1;
};

module.exports = firstMissingPositive;
