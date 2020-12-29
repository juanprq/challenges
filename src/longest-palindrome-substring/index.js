const isPalindrome = s => {
  return s
    .split('')
    .every((char, i) => char === s.charAt(s.length - i - 1));
}

const longestPalindrome = (string) => {
  let longest = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      const substring = string.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
};

module.exports = longestPalindrome;
