const permute = (nums) => {
  if (nums.length === 1) return [nums];

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const currentItem = nums[i];
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));


    const permutations = permute(rest).map(permutation => [currentItem, ...permutation]);
    result = [...result, ...permutations];
  }

  return result;
};

module.exports = permute;
