const kDiff = (nums, k) => {
  const result = {};
  // convert the nums into a count hash
  const numsCount = nums
    .reduce((accum, value) => {
      return { ...accum, [value]: accum[value] ? accum[value] + 1 : 1 };
    }, {});

  Object
    .entries(numsCount)
    .forEach(([numStr, count]) => {
      const num = parseInt(numStr, 10);
      const diffs = [
        num + k,
        num - k,
      ];

      diffs
        .forEach(diff => {
          if (
            numsCount[diff]
            && (num !== diff || count > 1)
          ) {
            const resultKey = [num, diff].sort().join('-');
            if (!result[resultKey]) result[resultKey] = [num, diff];
          }
        });
    });

  return Object.keys(result).length;
};

module.exports = kDiff;
