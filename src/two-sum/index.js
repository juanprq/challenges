const twoSum = (nums, target) => {
  const memo = new Array(nums.lenght);

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const idx = memo[complement];

    if (idx !== undefined) return [idx, i];

    memo[nums[i]] = i;
  }
};

module.exports = twoSum;
