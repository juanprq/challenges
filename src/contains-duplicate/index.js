// this solution is order of N
const containsDuplicate = (array) => {
  const cache = {};
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (cache[value]) return true;
    cache[value] = true;
  }

  return false;
};

module.exports = containsDuplicate;
