const searchRange = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let idx = -1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      idx = mid;
      break;
    }

    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (idx === -1) return [-1, -1];
  let lower = idx;
  let upper = idx;
  while (lower > 0 && nums[lower - 1] === target) lower--;
  while (upper < nums.length -1 && nums[upper + 1] === target) upper++;

  return [lower, upper];
};

module.exports = searchRange;
