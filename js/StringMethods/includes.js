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

// Your code here
