const moveZeroes = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      for (let j = i; j < input.length - 1; j++) {
        input[j] = input[j + 1];
        input[j + 1] = 0
      }
    }
  }

  return input;
};

module.exports = moveZeroes;
