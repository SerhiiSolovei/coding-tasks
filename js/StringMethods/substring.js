/**
 * Получение подстроки
 * #2
 * .substring() - возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки. По
 * сути аналогичен slice(). Разница в том, что substring не может принимать отрицательные индексы.
 *
 * Параметры: .substring(indexA, indexB?)
 *
 * indexA - Целое число от 0 до длины строки, определяющее смещение в строке первого символа, который будет
 * включён в результирующую подстроку.
 * indexB? - Необязательный параметр. Целое число от 0 до длины строки, определяющее смещение в строке первого
 * символа, который не будет включён в результирующую подстроку.
 *
 * Пример:
 */

const str = "Яблоко, Банан, Киви";

str.substring(7, 13); // 'Банан'

const newStr = "Apple, Banana, Kiwi!";

console.log(newStr.substring(0)); // "Apple, Banana, Kiwi!"
console.log(newStr.substring(0, 5)); // "Apple"
console.log(newStr.substring(7)); // "Banana, Kiwi!"
console.log(newStr.substring(-1)); // "Apple, Banana, Kiwi!"
console.log(newStr.substring()); // "Apple, Banana, Kiwi!"
console.log(newStr.substring(8, -3)); // "Apple, B"
console.log(newStr.substring(8, 8)); // ""
