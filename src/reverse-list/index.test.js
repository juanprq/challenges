const reverseList = require('./index');

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

describe('reverseList', () => {
  it('should be a function', () => {
    expect(reverseList).toBeInstanceOf(Function);
  });

  it('should return the reverse list', () => {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const head = new ListNode(1, node2);

    const newHead = reverseList(head);
    expect(newHead.val).toBe(5);
    expect(newHead.next.val).toBe(4);
    expect(newHead.next.next.val).toBe(3);
    expect(newHead.next.next.next.val).toBe(2);
    expect(newHead.next.next.next.next.val).toBe(1);
    expect(newHead.next.next.next.next.next).toBeNull();
  });

  it('should return the reverse list', () => {
    const node2 = new ListNode(2);
    const head = new ListNode(1, node2);

    const newHead = reverseList(head);
    expect(newHead.val).toBe(2);
    expect(newHead.next.val).toBe(1);
    expect(newHead.next.next).toBeNull();
  });

  it('should return the reverse list', () => {
    const newHead = reverseList(null);
    expect(newHead).toBeNull();
  });
});
