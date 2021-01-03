const threeSum = (numbers)  => {
  if (numbers.length < 3) return [];
  if (numbers.length === 3) {
    const sum = numbers.reduce((a, b) => a + b);
    if (sum === 0) {
      return [numbers];
    } else {
      return [];
    }
  }
  numbers.sort((a, b) => a - b);

  const results = [];
  for(let i = 0; i < numbers.length - 3; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let lower = i + 1;
    let upper = numbers.length - 1;
    while (lower < upper) {
      const result = numbers[i] + numbers[lower] + numbers[upper];

      if (result < 0) {
        lower++;
      } else if (result > 0) {
        upper--;
      } else {
        results.push([numbers[i], numbers[lower], numbers[upper]]);

        while (lower < upper && numbers[lower] === numbers[lower + 1]) lower++;
        while (lower < upper && numbers[upper] === numbers[upper - 1]) upper--;
        lower++;
        upper--;
      }
    }
  }

  return results;
};

module.exports = threeSum;
