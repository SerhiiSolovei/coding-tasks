import { generateArray } from "../../utils/generateNumberArray.js";
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

[1, 3, 5, 7, 8].find(function (element, index, array) {
  const isEven = element % 2 === 0;
  if (isEven) {
    return true;
  } else {
    return false;
  }
}); // 8

[4, 6, 8, 12].find(isPrime); // undefined
[4, 5, 8, 12].find(isPrime); // 5

function isPrime(element, index, array) {
  if (element <= 1) return false;
  else if (element === 2) return true;
  else {
    for (let i = 2; i < element; i++) if (element % i === 0) return false;
    return true;
  }
}

/**
 * Задача
 *
 * Воспользоваться методом .find() для поиска нечетного числа в массиве
 */

const randomValues = generateArray(10);

console.log(randomValues);
