const spiralOrder = (input) => {
  let result = [];

  const n = input.length;
  const m = input[0].length;

  let start = 0;
  let maxRow = n - 1;
  let maxCol = m - 1;

  while (start <= Math.min(maxCol, maxRow)) {
    if (start === maxRow) {
      result = result.concat(input[start].slice(start, maxCol + 1));
      break;
    }

    for(let i = start; i <= maxCol; i++) {
      result.push(input[start][i]);
    }

    for(let i = start + 1; i <= maxRow; i++) {
      result.push(input[i][maxCol]);
    }

    for (let i = maxCol - 1; i >= start; i--) {
      result.push(input[maxRow][i]);
    }

    for (let i = maxRow - 1; i > start; i--) {
      result.push(input[i][start]);
    }

    start++;
    maxRow--;
    maxCol--;
  }

  return result;
};

module.exports = spiralOrder;
