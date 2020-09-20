/**
 * Object.values() - возвращает массив значений.
 *
 * Параметры: Object.values(obj)
 *
 * obj - Объект, чьи значения перечисляемых свойств будут возвращены.
 *
 * Примеры:
 */

const user = {
  name: "John",
  age: 30,
};

Object.values(user); // ["John", 30]

const employee = {
  name: "John",
  age: 30,
  passport: {
    series: "MN",
    registration: "Kiev",
  },
};

Object.values(employee); // ["John", 30, { series: "MN", registration: "Kiev" }]
Object.values(employee.passport); // ["MN", "Kiev"]

const obj = { foo: "bar", baz: 42 };
Object.values(obj); // ['bar', 42]

// Массив как объект
const obj2 = { 0: "a", 1: "b", 2: "c" };
Object.values(obj2); // ['a', 'b', 'c']

// Массив как объект со случайным порядком ключей
// Когда мы используем нумерованные ключ, значения возвращаются в порядке возрастания
const an_obj = { 100: "a", 2: "b", 7: "c" };
Object.values(an_obj); // ['b', 'c', 'a']
