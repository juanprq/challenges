class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const pow = (base, exponent) => {
  let result = 1n;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result;
}

const getNumber = (l) => {
  let currentNode = l;
  let number = 0n;
  let i = 0;

  while(currentNode) {
    number = BigInt(currentNode.val) * pow(10n, i) + number;
    currentNode = currentNode.next;
    i++;
  }

  return number;
};

const getDigits = (number) => {
  if (number == 0) return [0];
  let reminder = number;
  const digits = [];

  while (reminder > 0) {
    digits.unshift(Number(reminder % 10n));
    reminder = reminder / 10n;
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
