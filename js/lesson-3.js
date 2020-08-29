/**Степень симметрии
 *
 * Степенью симметрии натурального числа назовём количество пар его десятичных цифр, в которых цифры совпадают и расположены симметрично относительно середины десятичной записи этого числа. Если некоторая цифра стоит посередине десятичной записи, её тоже нужно учитывать в паре с ней самой. Найти степень симметрии числа n.prb19
 *
 * Входные данные
 * Одно натуральное число n (n < 2 ·109).
 *
 * Выходные данные
 * Вывести степень симметрии числа n. */

function getSymmetryExtent(number) {
  let stringedNumber = String(number);
  let result = 0;
  for (let i = 0; i < stringedNumber.length / 2; i++) {
    if (stringedNumber[i] === stringedNumber[stringedNumber.length - i - 1]) {
      result += 1;
    }
  }
  return result;
}

console.log(getSymmetryExtent(123321));
