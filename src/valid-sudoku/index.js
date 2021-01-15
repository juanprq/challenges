const isValidArray = (array) => {
  const set = new Set(array);
  return set.size === array.length;
};

const isValidSudoku = (sudoku) => {
  // rows
  for (let i = 0; i < sudoku.length; i++) {
    const numbers = sudoku[i].filter(v => v !== '.');

    if (!isValidArray(numbers)) return false;
  }

  // cols
  for (let i = 0; i < sudoku.length; i++) {
    const numbers = [];
    for (let j = 0; j < sudoku.length; j++) {
      if (sudoku[j][i] !== '.') numbers.push(sudoku[j][i]);
    }

    if(!isValidArray(numbers)) return false;
  }

  // cubes
  for (let i = 0; i < sudoku.length / 3; i++) {
    for (let j = 0; j < sudoku.length / 3; j++) {

      let cube = [];
      for (let r = 0; r < sudoku.length / 3; r++) {
        for (let c = 0; c < sudoku.length / 3; c++) {
          const value = sudoku[i * 3 + r][j * 3 + c];
          if (value !== '.') {
            cube.push(value);
          }
        }
      }

      if (!isValidArray(cube)) return false;

    }
  }

  return true;
};

module.exports = isValidSudoku;
