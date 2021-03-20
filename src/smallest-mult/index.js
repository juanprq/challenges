const lcm = (a, b) => (a * b) / gcd(a, b);

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

const smallestMult = (n) => {
  let maxLCM = 1;

  for (let i = 2; i <= n; i++) {
    console.log(maxLCM);
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}

module.exports = smallestMult;
