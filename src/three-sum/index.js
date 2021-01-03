const findTwoNumbers = (numbers, target, ommitIndex) => {
  const memo = numbers
    .reduce(
      (accum, number, i) => {
        if (ommitIndex === i) return accum;
        if (accum[number]) {
          return { ...accum, [number]: [...accum[number], i] };
        } else {
          return { ...accum, [number]: [i] };
        }
      }, {},
    );

  let results = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === ommitIndex) continue;
    const complement = target - numbers[i];

    const possibilities = memo[complement] || [];
    possibilities.forEach((idx) => {
      if (idx !== i) {
        results.push([numbers[i], numbers[idx]]);
      }
    });
  }

  return results;
};

const threeSum = (numbers)  => {
  if (numbers.length < 3) return [];
  const result = new Set();

  for(let i = 0; i < numbers.length; i++) {
    const complement = 0 - numbers[i];
    const otherResults = findTwoNumbers(numbers, complement, i);
    otherResults.forEach((complements) => {
      result.add(
        [numbers[i], ...complements]
          .sort((a, b) => a - b)
          .join(',')
      );
    });
  }

  return [...result]
    .map(row => row.split(',').map(v => parseInt(v, 10)));
};

module.exports = threeSum;
