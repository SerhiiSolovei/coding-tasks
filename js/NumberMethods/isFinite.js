/**
 * Number.isFinite() - определяет, является ли переданное значение конечным числом.
 *
 * Параметры: Number.isFinite(value)
 *
 * value - Значение, проверяемое на конечность.
 *
 * Примеры:
 */

Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, при использовании глобальной
// функции isFinite('0') было бы true
