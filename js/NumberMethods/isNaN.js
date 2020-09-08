/**
 * Number.isInteger() - определяет, является ли переданное значение NaN.
 *
 * Параметры: Number.isNaN(value)
 *
 * value - Значение, проверяемое на NaN.
 *
 * Справка:
 * Поскольку оба оператора проверки на равенство, == и ===, вычисляются в false при проверке, что NaN и есть NaN, появляется необходимость в функции Number.isNaN().
 * Эта ситуация отличается от всех других возможных сравнений в JavaScript.
 *
 * Примеры:
 */

Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// При использовании глобальной функции isNaN() это всё будет true
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// А это всё в любом случае будет false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
