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
