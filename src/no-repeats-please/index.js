const generatePermutations = (string) => {
  if (string.length < 2) {
    return [string];
  };

  const results = [];
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    const remaining = string.slice(0, i).concat(string.slice(i + 1));

    generatePermutations(remaining).forEach(permutation => {
      results.push(char + permutation);
    });
  }

  return results;
};

const noRepeatingChars = (string) => {
  for (let i = 1; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i - 1)) return false;
  }

  return true;
};

const permAlone = (string) => {
  const permutations = generatePermutations(string)
    .filter(noRepeatingChars);

  return permutations.length;
};

module.exports = permAlone;
