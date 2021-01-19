const trap = (height) => {
  let i = 0;
  let result = 0;

  while (i < height.length) {
    // rule 1
    let nextIndex = i + 1;
    let maxValue = -Infinity;
    let maxIndex = -1;
    while (height[nextIndex] < height[i]) {
      if (height[nextIndex] > maxValue) {
        maxValue = height[nextIndex];
        maxIndex = nextIndex;
      }

      // increment until a taller column appears
      nextIndex++;
    }

    if (nextIndex === height.length && maxValue === -Infinity) {
      i++;
      continue;
    }

    const target = nextIndex < height.length ? nextIndex : maxIndex;
    const min = Math.min(height[i], height[target]);
    let accum = 0;
    for (let j = i + 1; j < target; j++) {
      accum += min - height[j];
    }

    i = target;
    result += accum;
  }

  return result;
};

module.exports = trap;
