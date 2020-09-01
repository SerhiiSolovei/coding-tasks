/**
 * ТЕОРИЯ: Матрицы (https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D1%8F_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0))
 * Матрицею розміру m×n (m-на-n,або mn-матрицею) називається множина з mn елементів Aij , розміщених у вигляді прямокутної таблиці з m рядків і n стовпців, а m і n — її розмірністю:
 */

/**
 * Задача №1
 *
 *  Дано: Многомерный массив
 *
 *  Справка: Массивы могут содержать элементы, которые тоже являются массивами.
 *  Это можно использовать для создания многомерных массивов, например, для хранения матриц:
 *  let matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ];
 * Для перебора многомерного массива придётся использовать вложенный цикл.
 * Первый цикл будет использоваться для доступа к элементам внешнего массива, а второй – для доступа к элементам вложенных массивов
 *
 * Задача: Вывести в консоль значение:
 * 1) Центрального элемента
 * 2) Последнего элемента в первой строке
 * 3) Первого элемента в последней строке
 */

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix[1][1]);
// console.log(matrix[0][2]);
// console.log(matrix[2][0]);

/**
 * Задача №2
 *
 * Дано: Матрица размерности NxM
 * Написать функцию которая посчитает сумму всех элементов
 */

function calculateMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

const myMatrix2 = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

const result2 = calculateMatrixElementsSum(myMatrix2); // 126

// console.log(result2);

/**
 * Задача №3
 *
 * Дано: Матрица размерности NxM
 * Написать функцию которая посчитает сумму элементов на нечетных позициях (значение i или j - нечетные числа)
 */

function calculateSumOfOddIndexedNumbers(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 !== 0 || j % 2 !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

const myMatrix3 = [
  [3, 1, 3],
  [5, 5, 6],
  [7, 4, 2],
];

const result3 = calculateSumOfOddIndexedNumbers(myMatrix3); // 21
// console.log(result3);

/**
 * Задача №4
 *
 * Дано: Матрица размерности NxM
 * Написать функцию которая посчитает сумму нечетных элементов
 */

function calculateSumOfOddNumbers(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

const myMatrix4 = [
  [8, 4, 3],
  [9, 6, 5],
  [1, 7, 2],
];

const result4 = calculateSumOfOddNumbers(myMatrix4); // 25

// console.log(result4);

/**
 * Задача №5
 *
 * Сгенерировать квадратную матрицу размерности N
 */

function generateMatrix(n) {
  const newMatrix = [];
  for (let i = 0; i < n; i++) {
    newMatrix.push([]);
    for (let j = 0; j < n; j++) {
      newMatrix[i].push(i * n + j + 1);
    }
  }
  return newMatrix;
}

const result5 = generateMatrix(3);

console.log(result5);
