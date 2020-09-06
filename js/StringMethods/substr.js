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

str.substring(7, 6); // 'Банан'
