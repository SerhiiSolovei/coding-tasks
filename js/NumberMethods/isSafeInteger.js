/**
 * Number.isSafeInteger() - определяет, является ли переданное значение безопасным целым числом.
 *
 * Параметры: Number.isSafeInteger(value)
 *
 * value - Значение, проверяемое на целочисленную «безопасность».
 *
 * Примеры:
 */

Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
