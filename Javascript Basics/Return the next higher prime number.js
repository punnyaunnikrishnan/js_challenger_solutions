function myFunction(a) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = a;
  while (!isPrime(n)) n++;
  return n;
}
