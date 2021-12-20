let board = [
  [5, 1, 7, 6, 0, 0, 0, 3, 4],
  [2, 8, 9, 0, 0, 4, 0, 0, 0],
  [3, 4, 6, 2, 0, 5, 0, 9, 0],
  [6, 0, 2, 0, 0, 0, 0, 1, 0],
  [0, 3, 8, 0, 0, 6, 0, 4, 7],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 7, 8],
  [7, 0, 3, 4, 0, 0, 5, 6, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const findEmptyCell = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return null;
};

const isValid = (board, num, position) => {
  for (let i = 0; i < 9; i++) {
    if (board[position[0]][i] === num && position[1] !== i) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][position[1]] === num && position[1] !== i) {
      return false;
    }
  }

  let boxX = Math.floor(position[1] / 3);
  let boxY = Math.floor(position[0] / 3);

  for (let i = boxY * 3; i < boxY * 3 + 3; i++) {
    for (let j = boxX * 3; j < boxX * 3 + 3; j++) {
      if (board[i][j] === num && [i, j] !== position) {
        return false;
      }
    }
  }

  return true;
};

const solveSudoku = (board) => {
  const find = findEmptyCell(board);

  let row;
  let column;

  if (!find) {
    return true;
  } else {
    [row, column] = find;
  }

  for (let i = 1; i < 10; i++) {
    if (isValid(board, i, [row, column])) {
      board[row][column] = i;

      if (solveSudoku(board)) {
        return true;
      }

      board[row][column] = 0;
    }
  }

  return false;
};

solveSudoku(board);
console.log(board);
