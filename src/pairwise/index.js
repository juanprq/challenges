const pairwise = (array, n) => {
  const usedIndexes = {};
  const indexes = array
    .reduce((accum, value, index) => {
      return { ...accum, [value]: accum[value] ? [...accum[value], index] : [index] };
    }, {});

  const result = [];
  for (let i = 0; i < array.length; i++) {
    const target = n - array[i];
    if (indexes[target] && indexes[target].length > 0 && usedIndexes[i] === undefined) {
      let targetIndex = indexes[target].shift();

      if (targetIndex === i && indexes[target].length > 0) {
        const aux = targetIndex;
        targetIndex = indexes[target][0];
        indexes[target][0] = aux;
      }

      if (usedIndexes[targetIndex] === undefined && targetIndex !== i) {
        usedIndexes[i] = true;
        usedIndexes[targetIndex] = true;
        result.push([array[i], target]);
      }
    }
  }

  return Object
    .keys(usedIndexes)
    .map(value => parseInt(value, 10))
    .reduce((a, b) => a + b, 0);
};

module.exports = pairwise;
