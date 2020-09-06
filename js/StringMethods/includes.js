/**
 * #3
 * .includes() -  проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
 *
 * Параметры: .includes(searchString, position?)
 * searchString - Строка для поиска в данной строке.
 * position - Позиция в строке, с которой начинать поиск, по умолчанию 0.
 *
 * Примеры:
 */

const str = "Быть или не быть вот в чём вопрос.";

str.includes("Быть"); // true
str.includes("вопрос"); // true
str.includes("несуществующий"); // false
str.includes("Быть", 1); // false
str.includes("БЫТЬ"); // false

const newStr = "To be or not to be";

console.log(newStr.includes("To")); // true
console.log(newStr.includes("Be")); //false
console.log(newStr.includes("or")); // true
console.log(newStr.includes("To", 1)); // false
console.log(newStr.includes("be", 3)); // true
