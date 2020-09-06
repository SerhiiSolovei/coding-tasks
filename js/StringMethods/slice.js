/**
 * Получение подстроки
 * #1
 *
 * .slice() - извлекает часть строки и возвращает новую строку.
 *
 * Параметры: .slice(beginSlice, endSlice?)
 *
 * beginSlice - Индекс, с которого начинать извлечение (нумерация начинается с нуля). Если параметр отрицательный,
 * позиция отсчитывается от конца строки.
 * endSlice? - Необязательный параметр. Индекс, которым заканчивать извлечение (нумерация начинается с нуля). Если
 * опущен, slice() извлечёт всё до конца строки. Если отрицателен, то трактуется как sourceLength + endSlice, где
 * sourceLength — это длина строки.
 *
 * Пример:
 * */

const str = "Я куплю Audi RS5.";

const who = str.slice(0, 1); // 'Я'
const goal = str.slice(0, 7); // 'Я куплю'

str.slice(-4); // 'RS5.'
str.slice(-4, -1); // 'RS5'
str.slice(0, -1); // 'Я куплю Audi RS5'

const newStr = "I will buy AUDI RS5!";

console.log(newStr.slice()); // "I will buy AUDI RS5!"
console.log(newStr.slice(0, 6)); // "I will"
console.log(newStr.slice(-4)); // "RS5!"
console.log(newStr.slice(0)); // "I will buy AUDI RS5!"
console.log(newStr.slice(11)); // "AUDI RS5!"
console.log(newStr.slice(-9, -5)); // "AUDI"
console.log(newStr.slice(2, -10)); // "will buy"
