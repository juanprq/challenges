const isMatch = (s, p) => {

  const match = (sI = 0, pI = 0) => {
    if (sI === s.length && pI === p.length) return true;
    if (sI > s.length || pI > p.length) return false;

    const currentChar = s.charAt(sI);
    const currentPattern = p.charAt(pI);

    if (currentPattern === '?') {
      return currentChar !== undefined && match(sI + 1, pI + 1);
    } else if (p[pI] === '*') {
      return match(sI + 1, pI) || match(sI, pI + 1);
    } else {
      return s[sI] === p[pI] && match(sI + 1, pI + 1);
    }
  }

  return match();
};

module.exports = isMatch;
