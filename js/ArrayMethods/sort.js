/**
 * .sort() - на месте сортирует элементы массива и возвращает отсортированный массив.
 * Сортировка не обязательно устойчива.
 * По умолчанию элементы сортируются как строки. Буквально, элементы преобразуются в строки при сравнении.
 * Для строк применяется лексикографический порядок, и действительно выходит, что "2" > "15".
 *
 *
 * Параметры: .sort(compareFunction?)
 *
 * - compareFunction(a, b) - Необязательный параметр. Указывает функцию, определяющую порядок сортировки.
 *            - a - Сравниваемое значение
 *            - b - Сравниваемое значение
 *
 * Пример:
 */

// Функция должна для пары значений возвращать:

function compareFunction(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

const arr = [2, 1, 5, 4, 3];

arr.sort(compareFunction);

// console.log(arr); // 1, 2, 3, 4, 5

/**
 * На самом деле от функции сравнения требуется любое положительное число, чтобы сказать «больше», и отрицательное число, чтобы сказать «меньше».
 * Это позволяет писать более короткие функции:
 */

const arr2 = [2, 1, 5, 4, 3];

arr2.sort((a, b) => a - b);

// console.log(arr2); // 1, 2, 3, 4, 5

/**
 * Задача
 *
 * Отсортировать сотрудников по убыванию возраста
 */

const employees = [
  { name: "George", age: 32, retiredate: "March 12, 2014" },
  { name: "Edward", age: 17, retiredate: "June 2, 2023" },
  { name: "Christine", age: 58, retiredate: "December 20, 2036" },
  { name: "Sarah", age: 62, retiredate: "April 30, 2020" },
];

employees.sort((employee1, employee2) => employee2.age - employee1.age);

// console.log(employees);
/**
 * Задача
 *
 * Отсортировать сотрудников по имени
 */

const employees2 = [
  { name: "George", age: 32, retiredate: "March 12, 2014" },
  { name: "Edward", age: 17, retiredate: "June 2, 2023" },
  { name: "Christine", age: 58, retiredate: "December 20, 2036" },
  { name: "Sarah", age: 62, retiredate: "April 30, 2020" },
];

employees2.sort((employee1, employee2) => {
  if (employee1.name > employee2.name) return 1;
  if (employee1.name === employee2.name) return 0;
  if (employee1.name < employee2.name) return -1;
});

// console.log(employees2);

/**
 * Задача
 *
 * Отсортировать сотрудников по имени, если имя одинаковое - по возрасту
 */

const employees3 = [
  { name: "Artem", age: 24 },
  { name: "Sanya", age: 25 },
  { name: "Serhii", age: 23 },
  { name: "Artem", age: 30 },
  { name: "Sanya", age: 15 },
  { name: "Serhii", age: 33 },
  { name: "Vadym", age: 18 },
  { name: "Maksym", age: 17 },
];

employees3.sort((employee1, employee2) => {
  if (employee1.name > employee2.name) {
    return 1;
  }
  if (employee1.name === employee2.name) {
    if (employee1.age > employee2.age) {
      return 1;
    }
    if (employee1.age === employee2.age) {
      return 0;
    }
    if (employee1.age < employee2.age) {
      return -1;
    }
  }
  if (employee1.name < employee2.name) {
    return -1;
  }
});

console.log(employees3);

const employees4 = [
  { name: "Artem", age: 24 },
  { name: "Sanya", age: 25 },
  { name: "Serhii", age: 23 },
  { name: "Artem", age: 30 },
  { name: "Sanya", age: 15 },
  { name: "Serhii", age: 33 },
  { name: "Vadym", age: 18 },
  { name: "Maksym", age: 17 },
];

employees4.sort((employee1, employee2) => {
  if (employee1.name > employee2.name) {
    return 1;
  }
  if (employee1.name === employee2.name) {
    return employee1.age - employee2.age;
  }
  if (employee1.name < employee2.name) {
    return -1;
  }
});
