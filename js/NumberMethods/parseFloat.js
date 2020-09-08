/**
 * Number.parseFloat() - разбирает строковый аргумент и возвращает число с плавающей запятой.
 *
 * Параметры: Number.parseFloat(string)
 *
 * string - Строка, представляющая значение, которое вы хотите разобрать.
 * Если число не может быть преобразовано, NaNвозвращается (Not a Number).
 *
 * Примеры:
 */

Number.parseFloat("10"); // returns 10
Number.parseFloat("10.33"); // returns 10.33
Number.parseFloat("10 20 30"); // returns 10
Number.parseFloat("10 years"); // returns 10
Number.parseFloat("years 10"); // returns NaN
