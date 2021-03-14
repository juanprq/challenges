const fiboEvenSum = (n) => {
  const fibonacci = [1, 1];
  while (fibonacci[fibonacci.length - 1] <= n) {
    const lastIndex = fibonacci.length - 1;
    fibonacci.push(fibonacci[lastIndex] + fibonacci[lastIndex - 1]);
  }

  return fibonacci
    .reduce((accum, value) => {
      if (value % 2 === 0) {
        return accum + value;
      }

      return accum;
    }, 0);
};

module.exports = fiboEvenSum;
