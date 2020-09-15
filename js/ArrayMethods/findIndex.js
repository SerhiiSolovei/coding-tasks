import { generateArray } from "../../utils/generateNumberArray.js";
/**
 * .findIndex() - возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
 *
 * (По сути похож на find, но возвращает индекс вместо значения.)
 *
 * Параметры: .findIndex(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

[1, 3, 5, 7, 8].findIndex((element) => element % 2 === 0); // 4

function isPrime(element) {
  if (element <= 1) return false;
  else if (element === 2) return true;
  else {
    for (let i = 2; i < element; i++) {
      if (element % i === 0) {
        return false;
      }
    }
    return true;
  }
}

[4, 6, 8, 12].findIndex(isPrime); // -1
[4, 6, 7, 12].findIndex(isPrime); // 2

/**
 * Задача
 *
 * Воспользоваться методом .findIndex() для поиска индекса нечетного числа в массиве
 */

const randomValues = generateArray(10);
const indexOfOddValue = randomValues.findIndex((element) => element % 2 !== 0);
console.log(randomValues, indexOfOddValue);
