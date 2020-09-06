/**
 * Получение подстроки
 * #3
 *
 * .substr() -  возвращает указанное количество символов из строки, начиная с указанной позиции. По сути аналогичен slice(). Разница в том, что второй параметр задает длину извлекаемой части.
 *
 * Параметры: .substring(start, length?)
 *
 * start - Позиция, с которой начинать извлекать символы. Если передано отрицательное число, она трактуется как strLength - start, где strLength равна длине строки
 * length? - Необязательный параметр. Количество извлекаемых символов.
 *
 * Пример:
 */

const str = "Яблоко, Банан, Киви";

str.substr(8, 5); // 'Банан'

const newStr = "Apple, Banana, Kiwi!";

console.log(newStr.substr(0)); // "Apple, Banana, Kiwi!"
console.log(newStr.substr(15, 4)); // "Kiwi"
console.log(newStr.substr(-1)); // "!"
console.log(newStr.substr(-1, -1)); // ""
console.log(newStr.substr(0, -1)); // ""
console.log(newStr.substr(8, -1)); // ""
console.log(newStr.substr(15, 15)); // "Kiwi!"
console.log(newStr.substr(-5)); // "Kiwi!"
