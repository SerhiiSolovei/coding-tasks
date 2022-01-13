/**
 * - Date.parse() - разбирает строковое представление даты и возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
 * - Параметры - Date.parse(dateString)
 *
 *   - dateString - Строковое представление даты из RFC2822 или ISO 8601.
 *                  Могут использоваться и другие форматы, но результаты в таком случае будут непредсказуемые.
 *
 *
 * Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:
 *
 * - YYYY-MM-DD – это дата: год-месяц-день.
 * - Символ "T" используется в качестве разделителя.
 * - HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
 * - Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
 * Пример:
 */

const ms = Date.parse("2012-01-26T13:51:50.417-07:00"); // 1327611110417 (таймстамп)
const msUTC = Date.parse("2012-01-26T13:51:50.417Z");

console.log(ms, msUTC);
// Можно тут же создать объект new Date из таймстампа:

const date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));