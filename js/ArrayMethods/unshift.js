/**
 * .unshift() - добавляет один или более элементов в начало массива и возвращает новую длину массива.
 *
 * Параметры: .unshift(element1, ..., elementN)
 *
 * Примеры:
 */

const arr = [1, 2];

arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]

const newArr = [1, 2, 3, 4, 5];

newArr.unshift([-2, -1, 0]); //  [[-2, -1, 0], 1, 2, 3, 4, 5]

console.log(newArr);