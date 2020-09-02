/**
 * Задача:
 *
 * Дано дiйсну квадратну матрицю порядку 2n.
 * Отримати нову матрицю, переставляючи ii блоки розмiру n.
 * */

function createMatrix(rows, columns) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      let shift = i * columns;
      row.push(shift + j + 1);
    }
    matrix.push(row);
  }

  return matrix;
}

function create2nMatrix(n) {
  return createMatrix(2 * n, 2 * n);
}

function transformByHalf(matrix) {
  const halfLength = matrix.length / 2;
  for (let i = 0; i < halfLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const current = matrix[i][j];
      matrix[i][j] = matrix[i + halfLength][j];
      matrix[i + halfLength][j] = current;
    }
  }

  return matrix;
}

// console.log(transformByHalf(create2nMatrix(2)));

function transformByDiagonal(matrix) {
  const halfLength = matrix.length / 2;
  for (let i = 0; i < halfLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const current = matrix[i][j];
      if (j < halfLength) {
        matrix[i][j] = matrix[i + halfLength][j + halfLength];
        matrix[i + halfLength][j + halfLength] = current;
      } else {
        matrix[i][j] = matrix[i + halfLength][j - halfLength];
        matrix[i + halfLength][j - halfLength] = current;
      }
    }
  }

  return matrix;
}

console.log(transformByDiagonal(create2nMatrix(2)));
