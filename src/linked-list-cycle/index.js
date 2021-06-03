const hasCycle = (head) => {
  // how can i tackle this?
  // I can store the reference time to time
  //
  // lets solve it using o(n) space and o(n^2) complexity
  const cache = [];

  let current = head;
  while (current.next) {
    if (cache.find(a => a === current)) return true;

    cache.push(current);
    current = current.next;
  }

  return false;
};

module.exports = hasCycle;
