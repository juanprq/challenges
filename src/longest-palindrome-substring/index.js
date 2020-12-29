const longestPalindrome = (string) => {
  let longest = '';

  const isPalindrome = (i, j) => {
    if (i >= j) return true;
    return string.charAt(i) === string.charAt(j) && isPalindrome(i + 1, j - 1);
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
