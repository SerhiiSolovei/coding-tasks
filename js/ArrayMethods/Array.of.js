/**
 * Array.of() - создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента.
 *
 * Разница между Array.of() и конструктором Array заключается в обработке целочисленных аргументов:
 * Array.of(7) создаёт массив с одним элементом 7, а Array(7) создаёт пустой массив со значением свойства length равным 7
 * (Замечание: подразумевается 7 пустых слотов, а не слоты со значением undefined).
 *
 * Параметры: Array.of(item1, item2, ... itemN)
 *
 *  itemN - Элементы, из которых создаётся массив.
 *
 * Примеры:
 */

Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // массив с 7 пустыми слотами
Array(1, 2, 3); // [1, 2, 3]