const combinationSum = (candidates, target) => {
  const result = [];

  const func = (currentIndex = 0, currentCandidates = [], currentSum = 0) => {
    if (currentSum === target) {
      result.push(currentCandidates);
      return;
    }
    if (currentSum > target || currentIndex >= candidates.length) return;

    const current = candidates[currentIndex];
    func(currentIndex, [...currentCandidates, current], currentSum + current);
    func(currentIndex + 1, currentCandidates, currentSum);
  };
  func();

  return result;
};

module.exports = combinationSum;
