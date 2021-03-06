/**
 * - getTime() - возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени.
 *   Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.
 * - Параметры -
 *
 * Пример:
 */

const moonLanding = new Date("July 20, 69 00:20:18 GMT+00:00");

// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime()); // -14254782000
