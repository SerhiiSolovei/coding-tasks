/**
 * - toISOString() -  возвращает строку в формате ISO, который можно описать следующим образом: YYYY-MM-DDTHH:mm:ss.sssZ.
 * Часовой пояс всегда равен UTC, что обозначено суффиксом "Z".
 *
 * - Параметры - .toISOString()
 *
 * Пример:
 */

const today = new Date("05 October 2011 14:48 UTC");

console.log(today.toISOString()); // 2011-10-05T14:48:00.000Z
