import { generateArray } from "../../utils/generateNumberArray.js";
/**
 * .forEach() - выполняет указанную функцию один раз для каждого элемента в массиве.
 *
 * Параметры: .forEach(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

const array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

const items = ["item1", "item2", "item3"];
const copy = [];

items.forEach((item) => {
  copy.push(item);
});

console.log(copy); // ["item1", "item2", "item3"];

/**
 *
 * Задача
 *
 * Вывести в консоль каждый элемент массива в формате: "Элемент: {число}, Индекс: {индекс}"
 */

const newArray = generateArray(10);

/**
 *
 * Задача
 *
 * Разделить
 */

const newArray2 = generateArray(10);

const distinctNumberToEvenAndOdds = (someArray) => {};

distinctNumberToEvenAndOdds(newArray2); // {odd: [...oddNumbers], even: [...evenNumbers]}
