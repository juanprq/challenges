const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  let i = 0;
  while(l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }

    i++
    if (i > 100) return -1;
  }

  return -1;
};

module.exports = binarySearch;
