const combinationSum = (candidates, target, currentIndex = 0, currentCandidates = []) => {
  if (target === 0) return [currentCandidates];
  if (target < 0 || currentIndex >= candidates.length) return [];

  const current = candidates[currentIndex];
  return [
    ...combinationSum(candidates, target - current, currentIndex, [...currentCandidates, current]),
    ...combinationSum(candidates, target, currentIndex + 1, currentCandidates),
  ];
};

module.exports = combinationSum;
