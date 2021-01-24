const multiplesOf3And5 = (n) => {
  let sum = 0;
  for (let i = 3; i < n; i += 3) {
    sum += i;
  }
  for (let i = 5; i < n; i += 5) {
    sum += i;
  }

  return sum;
};

module.exports = multiplesOf3And5;
