class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const addTwoNumbers = (l1, l2) => {
  let result;
  let prev;
  let carry = 0;

  let x = l1;
  let y = l2;

  while (x || y || carry !== 0) {
    let sum = carry;

    if (x) {
      sum += x.val;
      x = x.next;
    }
    if (y) {
      sum += y.val;
      y = y.next;
    }

    const currentNode = new ListNode(sum % 10);

    if (prev) {
      prev.next = currentNode;
    } else {
      result = currentNode;
    }

    prev = currentNode;
    carry = Math.floor(sum / 10);
  }

  return result;
};

module.exports = addTwoNumbers;
module.exports.ListNode = ListNode;
