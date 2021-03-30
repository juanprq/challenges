const spiralOrder = (input) => {
  const n = input.length;
  const m = input[0].length;
  const result = [];

  let start = 0;
  let rowsEnd = n - 1;
  let colsEnd = m - 1;
  while (start <= Math.max(rowsEnd, colsEnd)) {
    for (let i = start; i <= colsEnd; i++) {
      result.push(input[start][i]);
    }
    for (let i = start + 1; i < rowsEnd; i++) {
      result.push(input[i][colsEnd]);
    }
    for (let i = colsEnd; i > start; i--) {
      result.push(input[rowsEnd][i]);
    }
    for (let i = rowsEnd; i > start; i--) {
      result.push(input[i][start]);
    }

    start++;
    colsEnd--;
    rowsEnd--;
  }

  return result;
};

module.exports = spiralOrder;
