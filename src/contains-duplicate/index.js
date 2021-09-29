// this solution is order of N
const containsDuplicate = (array) => {
  return array.length !== new Set(array).size;
};

module.exports = containsDuplicate;
