/**
 * Задача №1
 * Создать функцию которая вернет массив значений заданого диапазона.
 * Условие: end >= 0, start >= 0, end > start
 * */

function getValuesFromRange(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

const result = getValuesFromRange(1, 10); // [1,2,3,4,5,6,7,8,9,10]
const result2 = getValuesFromRange(15, 19); // [15, 16, 17, 18, 19]

/**
 * Задача №2
 * Создать функцию которая будет генерировать значение в диапазоне.
 * Условие: max > min
 * */

function getValueInRange(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const result3 = getValueInRange(-3, 2); // -3 || -2 || -1 || 0 || 1 || 2

/**
 * Задача №3
 * Создать функцию которая будет генерировать массив размера N случайных значений в диапазоне от -100 до 100
 * Условие: amount > 0
 * */

function getRandomValues(amount) {
  const array = [];
  for (let i = 0; i < amount; i++) {
    const randomValue = getValueInRange(-100, 100);
    array.push(randomValue);
  }
  return array;
}

const result4 = getRandomValues(10); // [?, ?, ?, ?, ?] -> длинна массива 5, значения - случайные
console.log(result4);
