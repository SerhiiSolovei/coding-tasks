/**
 * .concat() - возвращает НОВЫЙ!!! массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
 *
 * Параметры: .concat(arr1, ..., arrN)
 *
 * Примеры:
 */

const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]

const newArr = ["One", "Two", "Three"];
const numArr = [1, 2, 3];
const numArr2 = [4, 5, 6];

console.log(newArr.concat(numArr)); // ["One", "Two", "Three", 1, 2, 3];
console.log(newArr.concat(numArr).concat(numArr2)); // ["One", "Two", "Three", 1, 2, 3, 4, 5, 6];
console.log(newArr.concat(numArr2, numArr)); // ["One", "Two", "Three", 4, 5, 6, 1, 2, 3];
console.log(newArr.concat(1, numArr2, numArr)); // ["One", "Two", "Three", 1, 4, 5, 6, 1, 2, 3];
console.log(newArr.concat(numArr, 7, 8, 9, numArr2)); // ["One", "Two", "Three", 1, 2, 3, 7, 8, 9, 4, 5, 6];
console.log(newArr.concat(7, 8, 9)); // ["One", "Two", "Three", 7, 8, 9];
console.log(newArr); // ["One", "Two", "Three"];
