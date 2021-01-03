const threeSum = (numbers)  => {
  if (numbers.length < 3) return [];
  const result = new Set();
  // the first naive solution could be O(n**3)
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 0) {
          result.add(
            [numbers[i], numbers[j], numbers[k]]
              .sort((a, b) => a - b)
              .join(',')
          );
        }
      }
    }
  }

  console.log(
    [...result]
      .map(row => row.split(',').map(v => parseInt(v, 10)))
  );

  return [...result]
    .map(row => row.split(',').map(v => parseInt(v, 10)));
};

module.exports = threeSum;
