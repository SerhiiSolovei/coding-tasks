/**
 * .flat() - возвращает НОВЫЙ!!! массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
 *
 * Параметры: .fill(depth?)
 *
 * depth? - Необязательный параметр. На сколько уровней вложенности уменьшается мерность исходного массива. По-умолчанию 1.
 *
 * Примеры:
 */

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1, 2, [3, 4]];
console.log(arr5.flat(-1)); // [1, 2, [3, 4]];
