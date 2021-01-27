const generatePermutations = (string) => {
  if (string.length < 2) {
    return [string];
  };

  let results = [];
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    const remaining = string.slice(0, i).concat(string.slice(i + 1));

    const currentPermutations = generatePermutations(remaining).map(p => char + p);
    results = [...results, ...currentPermutations];
  }

  return results;
};

const permAlone = (string) => {
  const permutations = generatePermutations('abcd');

  console.log(permutations);

  return 0;
};

module.exports = permAlone;
