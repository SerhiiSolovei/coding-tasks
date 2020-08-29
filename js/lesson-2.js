/**
 * Вычислить количество цифр целого неотрицательного числа n.
 *
 * Входные данные
 * Одно целое неотрицательное число n (0 ≤ n ≤ 2 * 109).
 * Выходные данные
 * Выведите количество цифр в числе n. */

function getNumberLength(number) {
  return String(number).length;
}

console.log(getNumberLength(12242352213233));
