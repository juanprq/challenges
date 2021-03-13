const getFinalOpenedDoors = (numDoors) => {
  const doors = new Array(numDoors).fill(false);

  for (let i = 1; i <= numDoors; i++) {
    for (let j = 0; j <= numDoors; j += i) {
      doors[j] = !doors[j];
    }
  }

  const result = doors.reduce((accum, value, index) => {
    if (!value) return accum;
    return [...accum, index];
  }, []);

  return result;
};

module.exports = getFinalOpenedDoors;
