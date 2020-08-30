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

console.log(createMatrix(7, 5));

function create2nMatrix(n) {
  return createMatrix(2 * n, 2 * n);
}

console.log(create2nMatrix(3));
