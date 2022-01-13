/**
 * - toLocaleDateString() - возвращает строку с языко-зависимым представлением части с датой в этой дате
 *
 * - Параметры - .toLocaleDateString(locales?, options?)
 *
 * - locales - Необязательный параметр. Строка с языковой меткой, либо массив таких строк.
 *   Интересующую локаль всегда можно найти в интернете - https://github.com/mozilla/language-mapping-list/blob/master/language-mapping-list.js
 *
 * - options - Необязательный параметр. Объект с некоторыми или всеми из следующих свойств:
 *   - timeZone - Используемый часовой пояс. Единственным значением, которые реализации обязаны распознавать, является "UTC"; значением по умолчанию является часовой пояс по умолчанию среды выполнения.
 *   - hour12 - Определяет, использовать ли 12-ти часовой формат времени (в противовес 24-х часовому). Возможными значениями являются true и false; значение по умолчанию зависит от локали.
 *  - weekday - Представление дней недели. Возможными значениями являются "narrow", "short" и "long".
 *  - era - Представление эр. Возможными значениями являются "narrow", "short" и "long".
 *  - year - Представление лет. Возможными значениями являются "numeric" и "2-digit".
 *  - month - Представление месяцев. Возможными значениями являются "numeric", "2-digit", "narrow", "short" и "long".
 *  - day - Представление дней. Возможными значениями являются "numeric" и "2-digit".
 *  - hour - Представление часов. Возможными значениями являются "numeric" и "2-digit".
 *  - minute - Представление минут. Возможными значениями являются "numeric" и "2-digit".
 *  - second - Представление минут. Возможными значениями являются "numeric" и "2-digit".
 *  - timeZoneName - Представление названий часовых поясов. Возможными значениями являются "short" и "long".
 *
 * Пример:
 */

const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleDateString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleDateString()); // 12/12/2012

var date2 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В америкаском английском используется порядок месяц-день-год
console.log(date2.toLocaleDateString("en-US"));
// → "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(date2.toLocaleDateString("en-GB"));
// → "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(date2.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(date2.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год являеся 24-м годом эры Хейсей
console.log(date2.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date2.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"

//////////////////////////////////////////////////////////////////

const date3 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date3.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date3.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, GMT"