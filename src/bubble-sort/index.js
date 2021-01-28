const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j - 1] > array[j]) {
        const aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      }
    }
  }

  return array;
};

module.exports = bubbleSort;
