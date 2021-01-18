const firstMissingPositive = (nums) => {
  let i = 0;
  let max = -Infinity;

  while (i < nums.length) {
    max = Math.max(max, nums[i]);
    if (nums[i] < 0) {
      i++;
      continue;
    }

    const currentIndex = nums[i] - 1;
    if (currentIndex > nums.length) {
      nums[i] = 0;
    } else if (nums[currentIndex] > 0) {
      nums[i] = nums[currentIndex]
    } else {
      nums[i] = 0;
      i++;
    }
    nums[currentIndex] = -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return i + 1;
    }
  }

  return Math.max(max + 1, 1);
};

module.exports = firstMissingPositive;
