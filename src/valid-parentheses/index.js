const matches = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const isValid = (string) => {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const current = string.charAt(i);
    if (Object.values(matches).includes(current)) {
      stack.push(current);
    } else {
      const opening = stack.pop();
      if (opening !== matches[current]) return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
