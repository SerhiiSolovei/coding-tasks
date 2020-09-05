import { transformStringToArray } from "../../utils/transformStringToArray.js";

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function traverseString(text, func) {
  const alphabetArray = transformStringToArray(alphabet);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const currentSymbol = text[i];
    const currentSymbolIndex = alphabetArray.indexOf(
      currentSymbol.toLowerCase()
    );

    const newSymbol = func(currentSymbol, currentSymbolIndex, alphabetArray);

    result += newSymbol;
  }

  return result;
}

function caesarCipher(text, shift = 3) {
  const encryptedText = traverseString(text, function (
    currentSymbol,
    currentSymbolIndex,
    alphabetArray
  ) {
    const newSymbolIndex =
      currentSymbolIndex < alphabetArray.length - shift
        ? currentSymbolIndex + shift
        : currentSymbolIndex + shift - alphabetArray.length;
    const newSymbol =
      currentSymbolIndex !== -1 ? alphabetArray[newSymbolIndex] : currentSymbol;
    return newSymbol;
  });

  return encryptedText;
}

function decodeCaesarCipher(text, shift = 3) {
  const decryptedText = traverseString(text, function (
    currentSymbol,
    currentSymbolIndex,
    alphabetArray
  ) {
    const newSymbolIndex =
      currentSymbolIndex - shift >= 0
        ? currentSymbolIndex - shift
        : alphabetArray.length + (currentSymbolIndex - shift);
    const newSymbol =
      currentSymbolIndex !== -1 ? alphabetArray[newSymbolIndex] : currentSymbol;
    return newSymbol;
  });

  return decryptedText;
}

const cipheredText = caesarCipher("Сергей", 3);
const normalText = decodeCaesarCipher(cipheredText, 3);
console.log(cipheredText);
console.log(normalText);
