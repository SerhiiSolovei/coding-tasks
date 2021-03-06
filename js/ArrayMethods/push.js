/**
 * .push() - добавляет один или более элементов в конец массива и возвращает новую длину массива.
 *
 * Параметры: .push(element1, ..., elementN)
 *
 * Примеры:
 */

const sports = ["футбол", "бейсбол"];
const total = sports.push("американский футбол", "плавание");

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total); // 4
