const mapping = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

const letterCombinations = (input) => {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    const letters = mapping[parseInt(input.charAt(i), 10) - 2];

    if (result.length === 0) {
      result = letters;
    } else {
      result = letters.reduce((accum, letter) => {
        const subArray = result.map(accumLetter => {
          return accumLetter + letter;
        });

        return [...accum, ...subArray];
      }, []);
    }
  }

  return result;
};

module.exports = letterCombinations;
