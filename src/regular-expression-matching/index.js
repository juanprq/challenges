const isMatch = (string, pattern) => {
  let patternIndex = 0;
  let stringIndex = 0;

  while(patternIndex < pattern.length) {
    let currentPattern = pattern.charAt(patternIndex);
    patternIndex++;
    if (pattern.charAt(patternIndex) === '*') {
      currentPattern += pattern.charAt(patternIndex);
      patternIndex++;
    }

    if (currentPattern === '.*') return true;
    if (currentPattern.length > 1) {
      while(string.charAt(stringIndex) === currentPattern.charAt(0)) {
        stringIndex++
      }
    } else if(currentPattern === '.'){
      if (string.charAt(stringIndex)) {
        stringIndex++;
      }
    } else {
      if (currentPattern !== string.charAt(stringIndex)) return false;
      stringIndex++;
    }
  }

  return stringIndex === string.length;
};

module.exports = isMatch;
