const rotate = (matrix) => {
  const n = matrix.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 1; j++) {
      let aux;
      let aux2;

      // son 4 iteraciones, por que? una por cada borde
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
  }

  return matrix;

  // en un matriz 3x3, solo tendria que iterar el border y de 0, 1, por que?
  // luego debo tener cada una de las posiciones
};

module.exports = rotate;
