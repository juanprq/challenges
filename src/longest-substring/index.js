const lengthOfLongestSubstring = (s) => {
  let result = 0;
  const memo = {};
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (memo[char]) {
      i = Math.max(memo[char], i);
    }

    result = Math.max(result, j - i + 1);
    memo[char] = j + 1;
  }

  return result;
};

module.exports = lengthOfLongestSubstring;
