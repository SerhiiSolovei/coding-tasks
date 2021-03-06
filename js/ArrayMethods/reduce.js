import { generateArray } from "../../utils/generateNumberArray.js";
/**
 * .reduce() - применяет функцию callback к каждому элементу массива (слева-направо), для вычисления какого-нибудь единого значения на основе всего массива.
 *
 * Параметры: .reduce(callback, initialValue?)
 *
 * - callback(accumulator, element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - accumulator - Аккумулятор, аккумулирующий значение, которое возвращает функция callback
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 * - initialValue? - Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
 *
 * Пример:
 */

const total = [1, 2, 3].reduce(function (total, amount) {
  return total + amount;
}, 0); // 6

// Чтобы суммировать значения, содержащиеся в массиве объектов, вы должны указать initialValue, чтобы каждый элемент смог пройти через callback.

const initialValue = 0;
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
initialValue);

// Пример: склеивание массивов, содержащихся в объектах массива, с использованием оператора расширения и initialValue

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
];

const allBooks = friends.reduce(function (acc, friend) {
  friend.books.forEach((book) => {
    acc.push(book);
  });
  return acc;
}, []);

const allBooks2 = friends.reduce(function (acc, friend) {
  return [...acc, ...friend.books];
}, []);

// Пример:

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

const fruitsCount = fruitBasket.reduce((counts, fruit) => {
  if (counts[fruit]) {
    counts[fruit] = counts[fruit] + 1;
  } else {
    counts[fruit] = 1;
  }
  return counts;
}, {});

console.log(fruitsCount); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

/**
 * Задача
 *
 * Просумировать все числа массива от которые > 0 и < 20
 */

const randomValues = generateArray(10);

const result = randomValues.reduce((acc, number) => {
  if (number > 0 && number < 20) {
    acc = acc + number;
  }
  return acc;
}, 0);

const newResult = randomValues
  .filter((number) => number > 0 && number < 20)
  .reduce((acc, item) => acc + item, 0);

console.log(randomValues, result, newResult);
/**
 * Задача
 *
 * Найти только уникальные цвета
 */

const colors = [
  "blue",
  "green",
  "green",
  "black",
  "orange",
  "blue",
  "green",
  "red",
];

const uniqueColors = colors.reduce((unique, color) => {
  if (!unique.includes(color)) {
    unique.push(color);
  }
  return unique;
}, []); // [ 'blue', 'red', 'green', 'black', 'orange']

console.log(uniqueColors);
/**
 *
 * Задача
 *
 * Найти максимальное значение в массиве
 */

const randomValues2 = generateArray(10);

const result2 = randomValues2.reduce((maxValue, currentValue) => {
  return currentValue > maxValue ? currentValue : maxValue;
});

console.log(randomValues2, result2);
