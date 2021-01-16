const countAndSay = (n) => {
  let currentResult = '1';

  for (let i = 1; i < n; i++) {
    let iterationResult = '';
    let j = 0;

    while (j < currentResult.length) {
      let count = 1;
      const currentChar = currentResult.charAt(j);

      while (currentChar === currentResult.charAt(j + 1)) {
        count++;
        j++;
      }

      iterationResult += `${count}${currentChar}`;
      j++;
    }

    currentResult = iterationResult;
  }

  return currentResult;
};

module.exports = countAndSay;
