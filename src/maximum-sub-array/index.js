const maxSubArray = (nums) => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {

    let current = 0;
    for (let j = i; j < nums.length; j++) {
      current += nums[j];

      max = Math.max(max, current);
    }
  }

  return max;
};

module.exports = maxSubArray;
