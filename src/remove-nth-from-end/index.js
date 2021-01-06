class ListNode {
  constructor(val, next) {
     this.val = (val === undefined ? 0 : val);
     this.next = (next === undefined ? null : next)
  }
}

const removeNthFromEnd = (head, n) => {
  let i = 0;
  let current = head;
  let prev = head;

  while(current) {
    current = current.next;
    if (i > n) {
      prev = prev.next;
    }

    i++;
  }

  if (i === n) {
    head = head.next;
  } else if (prev.next) {
    prev.next = prev.next.next;
  }

  return head;
};

module.exports = removeNthFromEnd;
module.exports.ListNode = ListNode;
