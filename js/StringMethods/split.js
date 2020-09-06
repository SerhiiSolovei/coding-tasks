/**
 * Преобразование строки в массив
 *
 * .split() - разбивает массив строк путём разделения строки указанной подстрокой.
 *
 * Параметры: .split(separator?, limit?)
 *
 * separator? - Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки.
 * Параметр separator может быть как строкой, так и регулярным выражением. Если параметр опущен, возвращённый
 * массив будет содержать один элемент со всей строкой. Если параметр равен пустой строке, строка str будет
 * преобразована в массив символов.
 * limit? - Необязательный параметр. Целое число, определяющее ограничение на количество найденных подстрок. Метод
 * split() всё равно разделяет строку на каждом сопоставлении с разделителем separator, но обрезает возвращаемый
 * массив так, чтобы он содержал не более limit элементов.
 *
 * Примеры:
 */

const txt = "а,б,в,г,д,е";
txt.split(","); // ["а", "б", "в", "г", "д", "е"]

const myString = "Привет, мир. Как дела?";
myString.split(" ", 3); // ["Привет,", "мир.", "Как"]

const newString = "Hello, world! How are you doing? Is everything okay?";

console.log(newString.split()); // ["Hello, world! How are you doing? Is everything okay?"]
console.log(newString.split(" ")); // ["Hello,", "world!", "How", "are", "you", "doing?", "Is", "everything", "okay?"]
console.log(newString.split("?")); // ["Hello, world! How are you doing", "Is everything okay"]
console.log(newString.split("", 0)); // []
console.log(newString.split("")); // ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!", " ", "H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?", " ", "I", "s", " ", "e", "v", "e", "r", "y", "t", "h", "i", "n", "g", " ", "o", "k", "a", "y", "?"]
console.log(newString.split("", 5)); // ["H", "e", "l", "l", "o"]
console.log(newString.split("o", 2)); // ["Hell", ", w"]
