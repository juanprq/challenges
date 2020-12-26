const twoSum = (nums, target) => {
  const memo = new Array(nums.length - 1);

  for (let i = 1; i < nums.length; i++) {
    memo[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const idx = memo[complement];
    if (idx && idx !== i) return [i, idx];
  }
};

module.exports = twoSum;
