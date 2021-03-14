const fiboEvenSum = (n) => {
  let result = 0;
  const fibonacci = [0, 1];
  while (fibonacci[fibonacci.length - 1] <= n) {
    const newNumber = fibonacci[1] + fibonacci[0];
    if (newNumber % 2 === 0) {
      result += newNumber;
    }

    fibonacci[0] = fibonacci[1];
    fibonacci[1] = newNumber;
  }

  return result;
};

module.exports = fiboEvenSum;
