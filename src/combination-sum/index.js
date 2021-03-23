const combinationSum = (candidates, target) => {
  const func = (currentIndex = 0, currentCandidates = [], currentSum = 0) => {
    if (currentSum === target) return [currentCandidates];
    if (currentSum > target || currentIndex >= candidates.length) return [];

    const current = candidates[currentIndex];
    return [
      ...func(currentIndex, [...currentCandidates, current], currentSum + current),
      ...func(currentIndex + 1, currentCandidates, currentSum),
    ];
  };
  return func();
};

module.exports = combinationSum;
