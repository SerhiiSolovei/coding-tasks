/**
 * Object.keys() - возвращает массив ключей.
 *
 * Параметры: Object.keys(obj)
 *
 * obj - Объект, чьи собственные перечисляемые свойства будут возвращены.
 *
 * Примеры:
 */

const user = {
  name: "John",
  age: 30,
};

Object.keys(user); // ["name", "age"]

const employee = {
  name: "John",
  age: 30,
  passport: {
    series: "MN",
    registration: "Kiev",
  },
};

Object.keys(employee); // ["name", "age", "passport"]
Object.keys(employee.passport); // ["series", "registration"]

const arr = ["a", "b", "c"];
Object.keys(arr); // ['0', '1', '2']

// Массивоподобный объект
const obj = { 0: "a", 1: "b", 2: "c" };
Object.keys(obj); // ['0', '1', '2']

// Массивоподобный объект со случайным порядком ключей
const an_obj = { 100: "a", 2: "b", 7: "c" };
Object.keys(an_obj); // ['2', '7', '100']
