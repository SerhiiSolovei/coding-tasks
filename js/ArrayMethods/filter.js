import { isPrime } from "../../utils/isPrime.js";
/**
 * .filter() - создаёт НОВЫЙ!!! массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
 *
 * (По сути функция фильтрует элементы через функцию и отдаёт все значения, при прохождении которых через функцию возвращается true.)
 *
 * Параметры: .filter(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

words.filter((word) => word.length > 6); // ["exuberant", "destruction", "present"]

function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); // [12, 130, 44]

const values = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

console.log(values.filter(isPrime)); // [53, 2, 5, 7, 31, 97, 17]

const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

console.log(users.filter((user) => user.id < 3)); // [{id: 1, name: "Вася"}, {id: 2, name: "Петя"}]
console.log(users.filter((user) => user.name.includes("а"))); // // [{id: 1, name: "Вася"}, {id: 3, name: "Маша"}]

/**
 * Задача
 *
 * Воспользоваться методом .filter() для поиска всех значений в массиве которые имеют популяцию больше чем 500,000,000.
 */

const data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];

const newData = data.filter((item) => item.population > 500000000); //
console.log(newData);

/**
 * Задача
 *
 * Воспользоваться методом .filter() для поиска всех значений в массиве которые содержат искомую строку
 */

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

const filterItems = (query) => fruits.filter((fruit) => fruit.includes(query));

const result = filterItems("ap"); // ['apple', 'grapes']
const result2 = filterItems("an"); // ['banana', 'mango', 'orange']

console.log(result, result2);
