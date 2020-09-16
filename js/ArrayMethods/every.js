/**
 * .every() - проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
 *
 * (Функция callback вызывается для каждого элемента массива. По сути eсли все результаты вызова являются true, то метод возвращает true, иначе false.)
 *
 * Параметры: .every(callback, thisArg?)
 *
 * - callback(element, index, array) - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 *            - element - Текущий обрабатываемый элемент в массиве.
 *            - index - Индекс текущего обрабатываемого элемента в массиве.
 *            - array - Массив, по которому осуществляется проход.
 *
 * Пример:
 */

[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true

/**
 * Задача:
 *
 * Есть массив с пользователями которые хотят увидеть админ панель сайта. Каждый пользователь имеет присвоенный ему доступ (permission).
 * Однако не все доступы имеют право просматривать админ панель (isAllowed). Справочник по доступ находиться в массиве permissions.
 *
 * Узнать все ли пользователи могут просматривать админ панель
 */

const onlineUsers = [
  { id: 1, name: "Alex", permission: "viewer" },
  { id: 2, name: "Serghii", permission: "admin" },
  { id: 3, name: "Vadym", permission: "moderator" },
  { id: 4, name: "Daryna", permission: "viewer" },
  { id: 5, name: "Artem", permission: "viewer" },
  { id: 6, name: "Vitalii", permission: "viewer" },
];

const permissions = [
  { id: 1, name: "admin", isAllowed: true },
  { id: 2, name: "moderator", isAllowed: true },
  { id: 3, name: "viewer", isAllowed: false },
];
