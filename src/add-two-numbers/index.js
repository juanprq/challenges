class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const getNumber = (l) => {
  let currentNode = l;
  let number = 0;
  let i = 0;

  while(currentNode) {
    number = currentNode.val * Math.pow(10, i) + number;
    currentNode = currentNode.next;
    i++;
  }

  return number;
};

const getDigits = (number) => {
  if (number === 0) return [0];
  let reminder = number;
  const digits = [];

  while (reminder > 0) {
    digits.unshift(reminder % 10);
    reminder = Math.floor(reminder / 10);
  }

  return digits;
};

const addTwoNumbers = (l1, l2) => {
  const result = getNumber(l1) + getNumber(l2);

  const digits = getDigits(result);
  let prevNode;
  for (let i = 0; i < digits.length; i++) {
    if (prevNode) {
      prevNode = new ListNode(digits[i], prevNode);
    } else {
      prevNode = new ListNode(digits[i]);
    }
  }

  return prevNode;
};

module.exports = addTwoNumbers;
module.exports.ListNode = ListNode;
