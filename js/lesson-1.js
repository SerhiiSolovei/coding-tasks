/**
 * Простая задача
 * Программа считывает двузначное число и выводит через пробел каждую цифру отдельно
 *
 * Входные данные
 * Натуральное число из промежутка от 10 до 99 включительно.
 *
 * Выходные данные
 * Два одноцифровых числа, разделенных пробелом.
 */

function formatNumber(number) {
  let result = "";
  for (let i = 0; i < number.toString().length; i++) {
    result = result + number.toString()[i] + " ";
  }
  return result;
}

function formatNumber2(number) {
  return String(number).split("").join(" ");
}

console.log(formatNumber(093242375812));
console.log(formatNumber2(093242375812));
