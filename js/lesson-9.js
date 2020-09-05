import { caesarCipher, alphabet } from "./lesson-8.js";
/**
 * Задача №2
 *
 * Написать функцию которая будет декодировать зашифрованное посление по шифру Цезаря с заданным сдвигом.
 * Условие: Неалфавитные символы — знаки препинания, пробелы, цифры — не меняются.
 */

function decodeCaesarCipher(text, shift = 3) {
  const alphabetArray = alphabet.split("");
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const currentSymbol = text[i];
    const currentSymbolIndex = alphabetArray.indexOf(
      currentSymbol.toLowerCase()
    );

    const newSymbolIndex =
      currentSymbolIndex - shift >= 0
        ? currentSymbolIndex - shift
        : alphabetArray.length + (currentSymbolIndex - shift);
    const newSymbol =
      currentSymbolIndex !== -1 ? alphabetArray[newSymbolIndex] : currentSymbol;
    result += newSymbol;
  }
  return result;
}

const encryptedText = caesarCipher("Санёк ни за что не узнает что он ..."); // Фгрин рл кг ъхс рз цкргзх ъхс ср ...
console.log(encryptedText);
const decryptedText = decodeCaesarCipher(encryptedText); // Санёк ни за что не узнает что он ..
console.log(decryptedText);
