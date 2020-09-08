/**
 * .toPrecision() - возвращает строку, представляющую число указанной точностью.
 *
 * Параметры: .toPrecision(precision?)
 *
 * precision - Необязательный параметр. Целое число, определяющее количество значащих цифр.
 *
 * Примеры:
 */

const numObj = 5.123456;

numObj.toPrecision(); // '5.123456'
numObj.toPrecision(5); // '5.1235'
numObj.toPrecision(2); // '5.1'
numObj.toPrecision(1); // '5'

const num = 53500;
const floatNum = 654.4536;

console.log(num.toPrecision(2)); // 5.4e+4

console.log(floatNum.toPrecision(1)); // 7e+2
console.log(floatNum.toPrecision(3)); // 654
console.log(floatNum.toPrecision(4)); // 654.4
