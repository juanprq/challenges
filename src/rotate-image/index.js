const rotate = (matrix) => {
  const n = matrix.length;
  let i = 0;
  while (i <= n - i - 1) {
    for (let j = i; j < n - i - 1; j++) {
      let aux;
      let aux2;

      let source = [i, j];
      let target = [j, n - 1 - i];

      aux = matrix[target[0]][target[1]];
      matrix[target[0]][target[1]] = matrix[source[0]][source[1]];

      target = [n - 1 - i, n - 1 - j];

      aux2 = aux;
      aux = matrix[target[0]][target[1]];
      matrix[target[0]][target[1]] = aux2;

      target = [n - 1 - j, i];

      aux2 = aux;
      aux = matrix[target[0]][target[1]];
      matrix[target[0]][target[1]] = aux2;

      target = [i, j];

      aux2 = aux;
      aux = matrix[target[0]][target[1]];
      matrix[target[0]][target[1]] = aux2;
    }

    i++;
  }

  return matrix;
};

module.exports = rotate;
