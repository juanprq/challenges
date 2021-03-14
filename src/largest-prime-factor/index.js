const n = 10000;

const generatePrimes = () => {
  const primes = [];

  for (let i = 1; i < n; i++) {
    let prime = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime) primes.push(i);
  }

  return primes;
};

const largestPrimeFactor = (n) => {
  const primes = generatePrimes();
  return primes
    .reduce((maxPrime, prime) => {
      if (n % prime === 0) return prime;
      return maxPrime;
    }, 1);
};

module.exports = largestPrimeFactor;
