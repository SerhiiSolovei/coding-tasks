/**
 * Object.entries() - возвращает массив пар [ключ, значение].
 *
 * Параметры: Object.entries(obj)
 *
 * obj - Объект, чьи перечислимые свойства будут возвращены в виде массива [key, value].
 *
 * Примеры:
 */

const user = {
  name: "John",
  age: 30,
};

Object.entries(user); // [ ["name","John"], ["age",30] ]

const employee = {
  name: "John",
  age: 30,
  passport: {
    series: "MN",
    registration: "Kiev",
  },
};

Object.entries(employee); // [ ["name","John"], ["age",30], ["passport", { series: "MN", registration: "Kiev" }] ]
Object.entries(employee.passport); // [ ["series", "MN"], ["registration", "Kiev"] ]

const obj = { foo: "bar", baz: 42 };
Object.entries(obj); // [ ['foo', 'bar'], ['baz', 42] ]

// массив как объект
const obj2 = { 0: "a", 1: "b", 2: "c" };
Object.entries(obj2); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// массив как объект c random сортировкой ключей
const an_obj = { 100: "a", 2: "b", 7: "c" };
Object.entries(an_obj); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
