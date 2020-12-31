const maxArea = (numbers) => {
  let lowerPointer = 0;
  let upperPointer = numbers.length - 1;
  let max = 0;

  while (lowerPointer < upperPointer) {
    const area = Math.min(numbers[lowerPointer], numbers[upperPointer]) * (upperPointer - lowerPointer);
    max = Math.max(max, area);

    if (numbers[lowerPointer] > numbers[upperPointer]) {
      upperPointer--;
    } else {
      lowerPointer++;
    }
  }

  return max;
};

module.exports = maxArea;
