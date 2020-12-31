const isMatch = (string, pattern) => {
  const memo = [];
  for (let i = 0; i <= string.length; i++) {
    for (let j = 0; j <= pattern.length; j++) {
      if (memo[i]) {
        memo[i][j] = undefined;
      } else {
        memo[i] = [undefined];
      }
    }
  }

  const iterate = (stringIndex = 0, patternIndex = 0) => {
    if (memo[stringIndex] && memo[stringIndex][patternIndex] !== undefined) return memo[stringIndex][patternIndex];
    if (patternIndex === pattern.length) {
      // check if we consumed all the string or not
      return stringIndex === string.length;
    }

    let result;
    const currentPattern = pattern.charAt(patternIndex);
    const firstMatch = stringIndex < string.length
      && (string.charAt(stringIndex) === currentPattern || currentPattern === '.');

    if (pattern.charAt(patternIndex + 1) === '*') {
      result = iterate(stringIndex, patternIndex + 2) // this is for ignoring the current char
        || firstMatch && iterate(stringIndex + 1, patternIndex); // or consume the char without going to the next pattern
    } else {
      result = firstMatch && iterate(stringIndex + 1, patternIndex + 1);
    }

    memo[stringIndex][patternIndex] = result;
    return result;
  };

  return iterate();
};

module.exports = isMatch;
