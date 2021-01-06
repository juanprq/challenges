class ListNode {
  constructor(val, next) {
     this.val = (val === undefined ? 0 : val);
     this.next = (next === undefined ? null : next)
  }
}

const removeNthFromEnd = (head, n) => {
  const references = [];
  let i = 0;
  let current = head;

  while(current) {
    references[i] = current;
    current = current.next;
    i++;
  }

  const prev = references[i - n - 1];

  if (!prev && i === 1) {
    return null;
  } else if (!prev) {
    head = head.next;
  } if (prev && prev.next) {
    prev.next = prev.next.next;
  }

  return head;
};

module.exports = removeNthFromEnd;
module.exports.ListNode = ListNode;
