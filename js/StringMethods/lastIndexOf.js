/**
 * #2
 * .lastIndexOf() - возвращает индекс последнего вхождения указанного текста в строке. Поиск по строке ведётся от
 * конца к началу, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
 *
 * Параметры: .lastIndexOf(searchValue, fromIndex?)
 * searchValue - Строка, представляющая искомое значение.
 * fromIndex? - Необязательный параметр. Местоположение внутри строки, откуда начинать поиск, нумерация индексов
 * идёт слева направо. Значение по умолчанию установлено в 0.
 *
 * Примеры:
 */

"канал".lastIndexOf("а"); // 3
"канал".lastIndexOf("а", 2); // 1
"канал".lastIndexOf("ч"); // -1

const text = "Привет Саша!";

console.log(text.lastIndexOf("а")); // 10
console.log(text.lastIndexOf("а", 9)); // 8
console.log(text.lastIndexOf("Саша")); // 7
