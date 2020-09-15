export function generateArray(length = 10) {
  return Array.from({ length: length }).map(() => generateRandomNumber(0, 100));
}

function generateRandomNumber(start, end) {
  return Math.floor(start + Math.random() * (end + 1 - start));
}
