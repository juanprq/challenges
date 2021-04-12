const noPlant = (garden, index) => {
  return garden[index] !== 1;
}

const canPlant = (garden, n) => {
  const newGarden = [...garden];
  let newPlants = 0;

  for (let i = 0; i < newGarden.length; i++) {
    if (noPlant(garden, i - 1) && noPlant(garden, i) && noPlant(garden, i + 1)) {
      newGarden[i] = 1;
      newPlants++;
    }
  }

  return newPlants >= n;
};

module.exports = canPlant;
