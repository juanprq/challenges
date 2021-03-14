const multiplesOf3And5 = (n) => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3  === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
};

module.exports = multiplesOf3And5;
