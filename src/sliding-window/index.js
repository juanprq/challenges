const maxSumOfK = (input, k) => {
  let max = 0;

  for (let i = 0; i < k; i++) {
    max += input[i];
  }

  let current = max;
  for (let i = k; i < input.length; i++) {

    current = current - input[i - k] + input[i];
    max = Math.max(max, current);
  }

  return max;
};

module.exports = maxSumOfK;
