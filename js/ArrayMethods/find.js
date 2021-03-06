import { generateArray } from "../../utils/generateNumberArray.js";
import { isPrime } from "../../utils/isPrime.js";
/**
 * .find() - возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.
 * В противном случае возвращается undefined.
 *
 * (По сути функция фильтрует элементы через функцию и отдаёт первое значение, при прохождении которого через функцию возвращается true.)
 *
 * Параметры: .find(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

[1, 3, 5, 7, 8].find((element) => element % 2 === 0); // 8

[4, 6, 8, 12].find(isPrime); // undefined
console.log([4, 5, 8, 12, 15].find((element) => isPrime(element))); // 5

/**
 * Задача
 *
 * Воспользоваться методом .find() для поиска нечетного числа в массиве
 */

const randomValues = generateArray(10);
const oddValue = randomValues.find((element) => element % 2 !== 0);
console.log(randomValues, oddValue);
