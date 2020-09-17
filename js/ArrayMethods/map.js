import { generateArray } from "../../utils/generateNumberArray.js";
/**
 * .map() - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
 *
 * Метод map является одним из наиболее полезных и часто используемых.
 *
 * Параметры: .map(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

const lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length); // [5,7,6]

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2); //  [2, 8, 18]

/**
 * Задача
 *
 * Модифицировать массив пользователей - добавить каждому пользователю свойство likes - которое должно быть равно умножению его возраст на кол-во букв в его имени
 */

const users = [
  { name: "shark", age: 24 },
  { name: "turtle", age: 30 },
  { name: "otter", age: 18 },
];

/**
 * Задача
 *
 * Создать функцию которая будет считать кол-во заработанных денег
 */

const products = [
  { id: 1, name: "Super Burger", price: 100 },
  { id: 2, name: "Jumbo Fries", price: 30 },
  { id: 3, name: "Big Slurp", price: 35 },
];

const orders = [
  { id: 1, productId: 3 },
  { id: 2, productId: 2 },
  { id: 3, productId: 2 },
  { id: 4, productId: 1 },
  { id: 5, productId: 3 },
  { id: 6, productId: 1 },
  { id: 7, productId: 2 },
  { id: 8, productId: 2 },
  { id: 9, productId: 3 },
  { id: 10, productId: 1 },
];
