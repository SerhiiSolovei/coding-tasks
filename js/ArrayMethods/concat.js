/**
 * .concat() - возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
 *
 * Параметры: .concat(arr1, ..., arrN)
 *
 * Примеры:
 */

const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]
