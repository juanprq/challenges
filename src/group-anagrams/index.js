const groupAnagrams = (array) => {
  const result = array
    .reduce((accum, string) => {
      const sortedString = string
        .split('')
        .sort()
        .join('');

      if (accum[sortedString]) {
        accum[sortedString].push(string);
      } else {
        accum[sortedString] = [string];
      }

      return accum;
    }, {});

  return Object.values(result);
};

module.exports = groupAnagrams;
