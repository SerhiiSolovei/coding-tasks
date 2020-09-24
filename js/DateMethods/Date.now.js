/**
 * - Date.now() - возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
 * - Параметры - Date.now()
 *
 * Пример:
 */

const timestamp = Date.now(); // количество миллисекунд с 1 января 1970 года

// Этот приём можно использовать для измерения времени:

const start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

const end = Date.now(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты

/**
 * Задача:
 * Сколько секунд осталось до завтра?
 */

const getSecondsToTomorrow = () => {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  return Math.floor((tomorrow.getTime() - now.getTime()) / 1000);
};

console.log(getSecondsToTomorrow());

// Например, если сейчас 23:00, то:

getSecondsToTomorrow() === 3600;

const getSecondsToTomorrow2 = () => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  console.log(now, tomorrow);
  return Math.floor((tomorrow.getTime() - now.getTime()) / 1000);
};

console.log(getSecondsToTomorrow2());
