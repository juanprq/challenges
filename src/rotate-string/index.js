// This is a solution of O(n)
const rotateString = (s, goal) => {
  if (s.length !== goal.length) return false;
  if (s.length === 0) return true;

  // find the index of the first letter of goal
  const firstLetter = goal.charAt(0);
  const indexes = [];
  for (let i = 0; i < goal.length; i++) {
    if (s.charAt(i) === firstLetter) {
      indexes.push(i);
    }
  }

  for (let i = 0; i < indexes.length; i++) {
    // one doubt that i have is the time complexity of the slice
    const a = s.slice(0, indexes[i]);
    const b = s.slice(indexes[i]);

    if ( b + a === goal ) return true;
  }

  return false;
};

module.exports = rotateString;
