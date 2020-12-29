const longestPalindrome = (string) => {
  let longest = '';
  const memo = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (memo[i]) {
        memo[i][j] = false;
      } else {
        memo[i] = [false];
      }
    }
  }

  const isPalindrome = (i, j) => {
    if (memo[i][j]) return memo[i][j]
    if (i >= j) return true;
    const result = string.charAt(i) === string.charAt(j) && isPalindrome(i + 1, j - 1);
    memo[i][j] = result;
    return result;
  }

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      if (isPalindrome(i, j) && (j - i + 1) > longest.length) {
        longest = string.slice(i, j + 1);
      }
    }
  }

  return longest;
};

module.exports = longestPalindrome;
