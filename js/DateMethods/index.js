// !!! - https://learn.javascript.ru/date
/**
 * Date - Создаёт экземпляр объекта Date, представляющего собой момент времени.
 * Обьект даты содержит число милисекунд прошедших с 1 января 1970 г. UTC
 *
 * Для создания нового объекта Date нужно вызвать конструктор new Date() с одним из следующих аргументов:
 *
 */

// #1 new Date()
// Без аргументов – создать объект Date с текущими датой и временем:
const now = new Date();
console.log(now); // показывает текущие дату и время

// #2 new Date(milliseconds)
// Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.
const Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// теперь добавим 24 часа и получим 02.01.1970 UTC+0
const Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// #3 new Date(datestring)
// Если аргумент всего один, и это строка, то из неё «прочитывается» дата.

const date = new Date("2020-01-26");
console.log(date);

// #4 new Date(year, month, date, hours, minutes, seconds, ms)
// Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.
// - year - должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
// - month - Целое значение, представляющее месяц, начинается с 0 для января и кончается 11 для декабря.
// - day - Необязательный параметр. Целое значение, представляющее день месяца.
// - hour - Необязательный параметр. Целое значение, представляющее часы дня.
// - minute - Необязательный параметр. Целое значение, представляющее минуты времени.
// - second - Необязательный параметр. Целое значение, представляющее секунды времени.
// - millisecond - Необязательный параметр. Целое значение, представляющее миллисекунды времени.

const someDate = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
const someDate2 = new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// СПРАВКА !!!
// Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp).

// Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:

// 31 декабря 1969 года
const Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);
