/**
 * Поиск подстроки
 * #1
 * .indexOf() - возвращает индекс (позицию) в первое вхождение указанного текста в строке. Возвращает -1, если значение не найдено.
 *
 * Параметры: .indexOf(searchValue, fromIndex?)
 *
 * searchValue - Строка, представляющая искомое значение.
 * fromIndex? - Необязательный параметр. Местоположение внутри строки, откуда начинать поиск. Может быть любы
 * целым числом. Значение по умолчанию установлено в 0. Если fromIndex < 0, поиск ведётся по всей строке (так же,
 * как если бы был передан 0). Если fromIndex >= str.length, метод вернёт -1, но только в том случае, если
 * searchValue не равен пустой строке, в этом случае он вернёт str.length.
 *
 * Пример:
 * */
const text = "Привет, кожанный ублюдок";

text.indexOf("и"); // 2
text.indexOf("г"); // -1

text.indexOf("о"); // 9
text.indexOf("о", 10); // 22

"Здравствуйте".indexOf("д"); // 1

const anotherText = "Артем, о Великий Сенсей!";

console.log(anotherText.indexOf("Артем")); // 0
anotherText.indexOf("а"); // -1
anotherText.indexOf("е", 4); // 10
console.log(anotherText.indexOf("и", -2)); // 12
console.log(anotherText.indexOf("", 50)); // anotherText.length - 24;
console.log(anotherText.indexOf("и", 50)); // -1;
