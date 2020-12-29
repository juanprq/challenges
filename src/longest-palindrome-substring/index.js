const longestPalindrome = (string) => {
  if ((string || '').length === 0) return '';
  const expandAroundCenter = (i, j) => {
    let left = i;
    let right = j;

    while (left >= 0 && right < string.length && string.charAt(left) === string.charAt(right)) {
      left--;
      right++;
    }

    return right - left - 1;
  };

  let start = 0;
  let end = 0;
  for (let i = 0; i < string.length; i++) {
    const l1 = expandAroundCenter(i, i);
    const l2 = expandAroundCenter(i, i + 1);

    const length = Math.max(l1, l2);
    if (length > (end - start)) {
      start = i - Math.floor((length - 1) / 2);
      end = i + Math.floor(length / 2);
    }
  }

  return string.slice(start, end + 1);
};

module.exports = longestPalindrome;
