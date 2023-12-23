const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const subResult = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const arrLine = [];
    matrix[i].forEach((item, index) => {
      if (item === true) {
        arrLine.push(item);
      } else {
        let mines = 0;
        if (i !== 0) {
          if (index !== 0) {
            if (matrix[i - 1][index - 1]) {
              mines += 1;
            }
          }
          if (matrix[i - 1][index]) {
            mines += 1;
          }
          if (matrix[i - 1][index + 1]) {
            mines += 1;
          }
        }
        if (index !== 0) {
          if (matrix[i][index - 1]) {
            mines += 1;
          }
        }
        if (matrix[i][index + 1]) {
          mines += 1;
        }
        if (i !== matrix.length - 1) {
          if (index !== 0) {
            if (matrix[i + 1][index - 1]) {
              mines += 1;
            }
          }
          if (matrix[i + 1][index]) {
            mines += 1;
          }
          if (matrix[i + 1][index + 1]) {
            mines += 1;
          }
        }

        arrLine.push(mines);
      }
    });
    subResult.push(arrLine);
  }

  const result = [];
  for (let i = 0; i < subResult.length; i += 1) {
    const arrLine = [];
    subResult[i].forEach((item) => {
      if (item === true) {
        arrLine.push(1);
      } else {
        arrLine.push(item);
      }
    });
    result.push(arrLine);
  }

  return result;
}

module.exports = {
  minesweeper,
};
