class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

const mergeTwoLists = (l1, l2) => {
  let currentNode;
  let head = null;
  let currentLeft = l1;
  let currentRight = l2;

  while (currentLeft || currentRight) {
    let leftValue = currentLeft ? currentLeft.val : Infinity;
    let rightValue = currentRight ? currentRight.val : Infinity;

    if (leftValue < rightValue) {
      currentLeft = currentLeft.next;
    } else {
      currentRight = currentRight.next;
    }

    const currentValue = Math.min(leftValue, rightValue);
    if (!currentNode) {
      head = new ListNode(currentValue);
      currentNode = head;
    } else {
      currentNode.next = new ListNode(currentValue);
      currentNode = currentNode.next;
    }
  }

  return head;
};

module.exports = mergeTwoLists;
module.exports.ListNode = ListNode;
