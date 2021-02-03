const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }

    const aux = array[i];
    array[i] = array[minIndex];
    array[minIndex] = aux;
  }

  return array;
};

module.exports = selectionSort;
