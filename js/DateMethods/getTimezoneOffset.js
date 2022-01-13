/**
 * - getTimezoneOffset() - возвращает смещение часового пояса относительно часового пояса UTC в минутах для текущей локали.
 *
 * Возвращает смещение часового пояса, являющееся разностью в минутах между временем UTC и местным временем.
 * Обратите внимание, что это значит, что смещение будет положительным для местного часового пояса, находящегося западнее часового пояса UTC и отрицательным — восточнее.
 * Например, если ваш часовой пояс равен UTC+10 (австралийское восточное поясное время), будет возвращено значение -600.
 * Наличие летнего и зимнего времени не даёт этому смещению быть постоянным, даже в пределах одного часового пояса.
 *
 * - Параметры -
 *
 * Пример:
 */

const x = new Date();
const currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60; // -3
console.log(currentTimeZoneOffsetInHours);