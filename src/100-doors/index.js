const getFinalOpenedDoors = (numDoors) => {
  let i = 1;
  let ii = i * i;

  let result = [];
  while (ii <= numDoors) {
    result.push(ii);

    i++;
    ii = i * i;
  }

  return result;
};

module.exports = getFinalOpenedDoors;
