/**
 * .splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
 *
 * Параметры: .splice(start, deleteCount, item1?, item2?, ... itemN?)
 *
 * start - Индекс, по которому начинает изменять массив.
 *         Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.
 *
 * deleteCount - Целое число, показывающее количество старых удаляемых из массива элементов.
 *               Если deleteCount равен 0, элементы не удаляются. В этом случае вы должны указать как минимум один новый элемент.
 *               Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все элементы до конца массива.
 *
 * itemN? - Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.
 *
 * Пример:
 * */

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

console.log(myFish); // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed); // removed равен [], ничего не удалено

const myFish2 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed2 = myFish.splice(3, 1);

console.log(myFish2); // myFish2 равен ["angel", "clown", "drum", "sturgeon"]
console.log(removed2); // removed2 равен ["mandarin"]

const myFish3 = ["angel", "clown", "drum", "sturgeon"];
const removed3 = myFish.splice(2, 1, "trumpet");

console.log(myFish3); // myFish3 равен ["angel", "clown", "trumpet", "sturgeon"]
console.log(removed3); // removed3 равен ["drum"]

const myFish4 = ["angel", "clown", "mandarin", "sturgeon"];
const removed4 = myFish.splice(-2, 1);

console.log(myFish4); // myFish равен ["angel", "clown", "sturgeon"]
console.log(removed4); // removed равен s ["mandarin"]

const myFish5 = ["angel", "clown", "mandarin", "sturgeon"];
const removed5 = myFish.splice(2);

console.log(myFish5); // myFish равен ["angel", "clown"]
console.log(removed5); // removed равен ["mandarin", "sturgeon"]
