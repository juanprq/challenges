const longestCommonPrefix = (strings) => {
  if (strings.length === 0) return '';
  let result = '';
  for(let i = 0; i < strings[0].length; i++) {
    const currentChars =  strings
      .map(s => s.charAt(i));
    const areEqual = currentChars.every(char => char === currentChars[0]);
    if (areEqual) {
      result += strings[0].charAt(i);
    } else {
      break;
    }
  }

  return result;
};

module.exports = longestCommonPrefix;
