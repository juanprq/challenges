const twoSum = (nums, target) => {
  const memo = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const idx = memo[complement];

    if (idx !== undefined) return [idx, i];

    memo[nums[i]] = i;
  }
};

module.exports = twoSum;
