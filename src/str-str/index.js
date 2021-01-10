const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }

  return -1;
};

module.exports = strStr;
