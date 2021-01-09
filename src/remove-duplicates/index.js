const removeDuplicates = (nums) => {
  let currentIndex = 1;

  while (currentIndex < nums.length) {
    if (nums[currentIndex] === nums[currentIndex - 1]) {
      nums.splice(currentIndex, 1);
    } else {
      currentIndex++;
    }
  }

  return nums.length;
};

module.exports = removeDuplicates;
