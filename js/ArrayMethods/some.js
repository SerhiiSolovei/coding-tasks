import { generateArray } from "../../utils/generateNumberArray.js";
/**
 * .some() - проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
 *
 * (Функция callback вызывается для каждого элемента массива. По сути eсли какой-либо результат вызова является true, то метод возвращает true, иначе false.)
 *
 * Параметры: .some(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

const isContainsEven = [1, 2, 3, 4, 5].some((element) => element % 2 === 0); // true

[2, 5, 8, 1, 4].some((elem) => elem > 10); // false
[12, 5, 8, 1, 4].some((elem) => elem > 10); // true

/**
 * Задача
 *
 * Воспользоваться методом .some() для проверки массива на наличие простых чисел
 */

const randomValues = generateArray(10);
const isContainsPrime = randomValues.some(/* Your code here */);

/**
 * Задача
 *
 * Написать свою версию метода includes - функцию myIncludes которая проверяет массив на наличие переданного значения
 */

const myIncludes = (array, value) => {};

const fruits = ["apple", "banana", "mango", "guava"];

myIncludes(fruits, "mango"); // true
myIncludes(fruits, "peach"); // false
