/**
 * .shift() - удаляет первый элемент из массива и возвращает его значение.
 *
 * Параметры: .shift()
 *
 * Примеры:
 */

const myFish = ["ангел", "клоун", "мандарин", "хирург"];

console.log("myFish до: " + myFish);
//myFish до: ангел,клоун,мандарин,хирург

const shifted = myFish.shift();

console.log("myFish после: " + myFish);
//myFish после: клоун,мандарин,хирург

console.log("Удалён этот элемент: " + shifted);
//Удалён этот элемент: ангел
