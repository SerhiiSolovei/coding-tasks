export function isPrime(element) {
  if (element <= 1) return false;
  else if (element === 2) return true;
  else {
    for (let i = 2; i < element; i++) {
      if (element % i === 0) {
        return false;
      }
    }
    return true;
  }
}
