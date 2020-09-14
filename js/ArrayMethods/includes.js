/**
 * .includes() - определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
 *
 * Параметры: .includes(searchValue, fromIndex?)
 *
 * searchValue - Искомый элемент в массиве.
 * fromIndex? - Позиция в массиве, с которой начинать поиск элемента  searchElement.
 * При отрицательных значениях поиск производится начиная с индекса array.length + fromIndex по возрастанию. Значение по умолчанию равно 0.
 *
 * Примеры:
 */

[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
