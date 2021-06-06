const chatOrder = (input) => {
  const memo = {};
  const result = [];

  for (let i = input.length - 1; i >= 0; i--) {
    if (!memo[input[i]]) {
      result.push(input[i]);
      memo[input[i]] = true;
    }
  }

  return result;
};

module.exports = chatOrder;
