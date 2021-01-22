const rotate = (matrix) => {
  const n = matrix.length;
  // let's tackle the problem first using additional memory
  const newMatrix = new Array(n);
  for (let i = 0; i < n; i++) {
    newMatrix[i] = new Array(n);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][n - i - 1] = matrix[i][j];
    }
  }

  return newMatrix;
};

module.exports = rotate;
