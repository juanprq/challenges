const mapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const letters = Object.keys(mapping);

const romanToInt = (string) => {
  let result = 0;
  let i = 0;

  while (i < string.length) {
    const currentChar = string.charAt(i);
    const nextChar = string.charAt(i + 1);

    if (nextChar !== undefined) {
      const charIndex = letters.findIndex(c => c === currentChar);

      if (charIndex !== -1 && (letters[charIndex + 1] === nextChar || letters[charIndex + 2] === nextChar)) {
        i++
        result += mapping[nextChar] - mapping[currentChar]
      } else {
        result+= mapping[currentChar];
      }
    } else {
      result+= mapping[currentChar];
    }

    i++;
  }

  return result;
};

module.exports = romanToInt;
