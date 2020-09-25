/**
 * - toTimeString() - возвращает часть, содержащую только время объекта Date в виде человеко-читаемой строки на американском английском.
 *
 * - Параметры - .toTimeString()
 *
 * Пример:
 */

const date = new Date(1993, 6, 28, 14, 39, 7);

console.log(date.toString()); // Wed Jul 28 1993 14:39:07 GMT+0300 (Eastern European Summer Time)
console.log(date.toTimeString()); // 14:39:07 GMT+0300 (Eastern European Summer Time)
