/**
 * #4
 * .startsWith() - определяет, начинается ли строка с символов другой строки, возвращая, соответсвенно, true или false.
 *
 * Параметры: .startsWith(searchString, position?)
 *
 * searchString - Символы, искомые в начале данной строки.
 * position - Необязательный параметр. Позиция в строке, с которой начинать поиск; по умолчанию установлена в 0.
 *
 * Примеры:
 */

const str = "Быть или не быть, вот в чём вопрос.";

str.startsWith("Быть"); // true
str.startsWith("не быть"); // false
str.startsWith("не быть", 9); // true

const newStr = "To be or not to be!";

console.log(newStr.startsWith("To")); // true
console.log(newStr.startsWith("To be")); // true
console.log(newStr.startsWith("be", 3)); // true
console.log(newStr.startsWith("or not", 4)); // false
