const merge = (left, right) => {
  const [leftHead, ...leftRest] = left;
  const [rightHead, ...rightRest] = right;

  if (!leftHead) return right;
  if (!rightHead) return left;

  if (leftHead < rightHead) {
    return [leftHead, ...merge(leftRest, right)];
  } else {
    return [rightHead, ...merge(left, rightRest)];
  }
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

module.exports = mergeSort;
