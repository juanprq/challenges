const maxArea = (numbers) => {
  let max = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const width = j - i;
      const height = Math.min(numbers[i], numbers[j]);

      max = Math.max(max, width * height);
    }
  }

  return max;
};

module.exports = maxArea;
