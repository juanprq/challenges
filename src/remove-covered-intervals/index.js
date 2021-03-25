const removeCoveredIntervals = (intervals) => {
  const result = [];
  let currentIntervals = intervals;

  while (currentIntervals.length > 0) {
    const [head, ...rest] = currentIntervals;

    let handled = false;
    for (let i = 0; i < result.length; i++) {
      const [leftMin, leftMax] = result[i];
      const [rightMin, rightMax] = head;

      if (leftMin <= rightMin && leftMax >= rightMax) {
        handled = true;
        break;
      } else if (rightMin <= leftMin && rightMax >= leftMax ) {
        handled = true;
        result[i] = head;
        break;
      }
    }

    currentIntervals = rest;
    if (!handled) {
      result.push(head);
    }
  }

  return result.length;
};

module.exports = removeCoveredIntervals;
