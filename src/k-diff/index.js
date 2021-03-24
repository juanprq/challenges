const kDiff = (nums, k) => {
  const result = {};

  // n ** 2
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j]);
      if (diff === k) {
        const key = [nums[i], nums[j]].sort().join('-');
        if (!result[key]) result[key] = [nums[i], nums[j]];
      }
    }
  }

  return Object.keys(result).length;
};

module.exports = kDiff;
