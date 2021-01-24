const countChars = (str) =>
  str
    .split('')
    .reduce((accum, char) => ({
      ...accum,
      [char]: accum[char] ? accum[char] + 1 : 1,
    }), {});

const isAnagram = (dict1, dict2) => {
  if (Object.keys(dict1).length !== Object.keys(dict2).length) return false;
  return Object
    .keys(dict1)
    .every(key => dict1[key] === dict2[key]);
};

const groupAnagrams = (array) => {
  const result = array
    .map((chars) => ({
      value: chars,
      count: countChars(chars),
    }))
    .reduce((accum, { value, count }) => {
      let added = false;
      for (let i = 0; i < accum.length; i++) {
        const { count: groupCount } = accum[i];
        if (isAnagram(count, groupCount)) {
          accum[i].values.push(value);
          added = true;
          break;
        }
      }

      if (!added) {
        accum.push({
          count,
          values: [value],
        });
      }

      return accum;
    }, [])
    .map(result => result.values);

  return result;
};

module.exports = groupAnagrams;
