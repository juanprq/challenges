const isMatch = (s, p) => {
  const memo = [];

  const match = (sI = 0, pI = 0) => {
    if (memo[sI] && memo[sI][pI] !== undefined) return memo[sI][pI];

    if (sI === s.length && pI === p.length) return true;
    if (sI > s.length || pI > p.length) return false;

    const currentChar = s.charAt(sI);
    const currentPattern = p.charAt(pI);

    let result;
    if (currentPattern === '?') {
      result = currentChar !== undefined && match(sI + 1, pI + 1);
    } else if (p[pI] === '*') {
      result = match(sI + 1, pI) || match(sI, pI + 1);
    } else {
      result = s[sI] === p[pI] && match(sI + 1, pI + 1);
    }

    if (!memo[sI]) memo[sI] = [];
    memo[sI][pI] = result;

    return result;
  }

  return match();
};

module.exports = isMatch;
