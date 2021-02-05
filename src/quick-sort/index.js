const quickSort = (array) => {
  if (array.length <= 1) return array;

  const [pivot, ...rest] = array;
  const left = quickSort(rest.filter(value => value <= pivot));
  const right = quickSort(rest.filter(value => value > pivot));

  return [...left, pivot, ...right];
};

module.exports = quickSort;
