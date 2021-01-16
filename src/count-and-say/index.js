const countAndSay = (n) => {
  if (n === 1) return '1';

  const prevResult = countAndSay(n - 1);
  let i = 0;
  let result = '';
  while (i < prevResult.length) {
    let count = 1;
    const currentChar = prevResult.charAt(i);

    while (currentChar === prevResult.charAt(i + 1)) {
      count++;
      i++;
    }

    result += `${count}${currentChar}`;
    i++;
  }

  return result;
};

module.exports = countAndSay;
