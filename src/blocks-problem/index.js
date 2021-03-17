const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

const importantBuildings = ['gym', 'school', 'store'];

const findNearestBuilding = (blocks, building, currentIndex) => {
  const min = blocks.reduce((min, b, i) => {
    if (b[building]) {
      const current = Math.abs(i - currentIndex)
      return current < min ? current : min;
    };
    return min;
  }, Infinity);

  return min;
};

const selectAppartment = (blocks, importantBuildings) => {
  const buildingDistances = blocks
    .map((block, i) => {
      const distances = importantBuildings
        .map(building => findNearestBuilding(blocks, building, i)) ;

      return Math.max(...distances);
    }, 0);

  const { i } = buildingDistances
    .reduce((min, distance, i) => {
      if (!min) return { i, distance };
      const { i: minI, distance: minDistance } = min;

      return distance < minDistance ? { i, distance } : min;
    }, null);

  return i;
};

console.log(selectAppartment(blocks, importantBuildings));
