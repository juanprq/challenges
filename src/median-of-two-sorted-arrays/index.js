const findMedianSortedArrays = (a1, a2) => {
  // first lets implement this in a regular linear way
  // I'm going to merge the arrays into a new one
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length || j < a2.length) {
    const a = a1[i] || Infinity;
    const b = a2[j] || Infinity;

    if (a && a < b) {
      result.push(a);
      i++;
    } else {
      result.push(b);
      j++;
    }
  }

  if (result.length % 2 === 0) {
    return (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  } else {
    return result[Math.floor(result.length / 2)];
  }
};

module.exports = findMedianSortedArrays;
