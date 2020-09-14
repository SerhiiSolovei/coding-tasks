/**
 * .lastIndexOf() - возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если искомый элемент не найден.
 * Массив просматривается от конца к началу, начиная с индекса fromIndex.
 *
 * Параметры: .lastIndexOf(searchValue, fromIndex?)
 *
 * searchValue - Искомый элемент в массиве.
 * fromIndex? - Необязательный параметр. Индекс, с которого начинать поиск в обратном направлении.
 * Если индекс больше или равен длине массива, просматривается весь массив. Если индекс является отрицательным числом, он трактуется как смещение с конца массива.
 * Обратите внимание: если индекс отрицателен, массив всё равно просматривается от конца к началу.
 * Если рассчитанный индекс оказывается меньше 0, массив даже не просматривается. Значение по умолчанию равно длине массива, что означает, что просматривается весь массив.
 *
 * Примеры:
 */

const array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3

const newArr = [1, 2, 3, 3, 2, 1];

console.log(newArr.lastIndexOf(1)); // 5
console.log(newArr.lastIndexOf(1, 4)); // 0
console.log(newArr.lastIndexOf(3)); // 3
console.log(newArr.lastIndexOf(3, 4)); // 3
console.log(newArr.lastIndexOf(3, 2)); // 2
