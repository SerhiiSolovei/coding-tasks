/**
 * #5
 * .endsWith() - определяет, заканчивается ли строка символами другой строки, возвращая, соотвественно, true или false.
 *
 * Параметры: .endsWith(searchString, position?)
 *
 * searchString - Символы, искомые в конце данной строки.
 * position - Необязательный параметр. Искать внутри данной строки, как если бы эта строка была указанной длины;
 * по умолчанию установлен в реальную длину строки, обрезается по диапазону, устанавливаемому длиной этой строки.
 *
 * Примеры:
 */

const str = "Быть или не быть, вот в чём вопрос.";

str.endsWith("вопрос."); // true
str.endsWith("быть"); // false
str.endsWith("быть", 16); // true

const newStr = "To be or not to be!";

console.log(newStr.endsWith("be!")); // true
console.log(newStr.endsWith("be")); // false
console.log(newStr.endsWith("to be!")); // true
console.log(newStr.endsWith("not", 12)); // true
