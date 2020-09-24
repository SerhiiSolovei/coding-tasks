/**
 * - setTime() - устанавливает время объекта Date в значение, представляемое количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.
 * - Параметры - .setTime(timestamp)
 *
 *   - timestamp - Целое число, представляющее количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.
 *
 * Пример:
 */

const theBigDay = new Date("July 1, 1999");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
