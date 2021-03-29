const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];

  const half = Math.floor(nums.length / 2);
  const left = nums.slice(0, half);
  const right = nums.slice(half);

  console.log({ nums, left, right });

  const best = Math.max(maxSubArray(left), maxSubArray(right));

  let bestSumLeft = left[left.length - 1];
  let sumLeft = left[left.length - 1];
  for (let i = left.length - 2; i >= 0; i--) {
    sumLeft += left[i];
    Math.max(bestSumLeft, sumLeft);
  }

  let bestSumRight = right[0];
  let sumRight = right[0];
  for (let i = 1; i < right.length; i++) {
    sumRight += right[i];
    Math.max(bestSumRight, sumRight);
  }

  return Math.max(best, bestSumLeft + bestSumRight);
};

module.exports = maxSubArray;
