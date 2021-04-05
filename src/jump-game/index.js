const canJump = (nums, currentIndex = 0) => {
  if (currentIndex === nums.length - 1) return true;
  if (currentIndex >= nums.length) return false;

  const maxLengthJump = nums[currentIndex];
  let results = [false];
  for (let i = 1; i <= maxLengthJump; i++) {
    results.push(canJump(nums, currentIndex + i));
  }

  return results.some(a => a);
};

module.exports = canJump;
