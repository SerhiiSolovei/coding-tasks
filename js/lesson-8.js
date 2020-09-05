/**
 * Задача №1
 *
 * Написать функцию которая будет шифровать сообщение по Шифру Цезаря с заданным сдвигом.
 * Справка: https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F
 * Условие: Неалфавитные символы — знаки препинания, пробелы, цифры — не меняются.
 */

export const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const normalAlphabet = "абвгдеєжзиіїйклмнопрстуфхцчшщьюя";

function transformStringToArray(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }

  return array;
}

export function caesarCipher(text, shift = 3) {
  const alphabetArray = alphabet.split("");
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const currentSymbol = text[i];
    const currentSymbolIndex = alphabetArray.indexOf(
      currentSymbol.toLowerCase()
    );
    const newSymbolIndex =
      currentSymbolIndex < alphabetArray.length - shift
        ? currentSymbolIndex + shift
        : currentSymbolIndex + shift - alphabetArray.length;
    const newSymbol =
      currentSymbolIndex !== -1 ? alphabetArray[newSymbolIndex] : currentSymbol;
    result += newSymbol;
  }

  return result;
}

const encryptedText = caesarCipher("Санёк ни за что не узнает что он ..."); // Фгрин рл кг ъхс рз цкргзх ъхс ср ...
// console.log(encryptedText);
