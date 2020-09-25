/**
 * - toJSON() -  Вызов метода toJSON() вернёт строку, отформатированную в JSON (при помощи метода toISOString())
 *
 * - Параметры - .toJSON()
 *
 * Пример:
 */

const jsonDate = new Date().toJSON();
const backToDate = new Date(jsonDate);

console.log("Сериализованный объект даты: " + jsonDate);
