class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

const mergeKLists = (lists) => {
  const head = new ListNode(-1);
  let currentNode = head;

  while (true) {
    const minIdx = lists
      .reduce((accum, node, idx) => {
        const currentMin = lists[accum] ? lists[accum].val : Infinity;
        const nextMin = node ? node.val : Infinity;

        if (nextMin < currentMin) {
          return idx;
        }

        return accum;
      }, -1);

    if (minIdx === -1) break;
    currentNode.next = new ListNode(lists[minIdx].val);
    currentNode = currentNode.next;
    lists[minIdx] = lists[minIdx].next;
  }

  currentNode = head;
  while (currentNode) {
    currentNode = currentNode.next;
  }

  return head.next;
};

module.exports = mergeKLists;
module.exports.ListNode = ListNode;
