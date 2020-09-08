/**
 * .toString() - возвращает строковое представление числа.
 *
 * Параметры: .toString(radix?)
 *
 * radix? - Необязательный параметр. Целое число между 2 и 36, определяющее основание системы счисления, используемой для представления числового значения.
 *
 * Примеры:
 */

const count = 10;

count.toString(); // '10'
(17).toString(); // '17'

const x = 6;

x.toString(2); // '110'
(254).toString(16); // 'fe'

(-10).toString(2); // '-1010'
(-0xff).toString(2); // '-11111111'
