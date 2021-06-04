const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

module.exports = reverseList;
