const isPalindrome = (string) => {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    const counterIndex = string.length - i - 1;

    if (string.charAt(i) !== string.charAt(counterIndex)) return false;
  }

  return true;
};

const largestPalindromeProduct = (n) => {
  const max = Math.pow(10, n) - 1;

  for (let i = max * max; i > 9; i--) {
    if (isPalindrome(`${i}`)) {
      for (let j = max; j > 9; j--) {
        if (i % j === 0 && i / j <= max) return i;
      }
    }
  }

  return 9;
};

module.exports = largestPalindromeProduct;
