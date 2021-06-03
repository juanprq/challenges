const hasCycle = require('./index');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
describe('hasCycle', () => {
  it('should be a function', () => {
    expect(hasCycle).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    const head = new ListNode(3);
    const n2 = new ListNode(2);
    const n3 = new ListNode(0);
    const n4 = new ListNode(-4);

    head.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n2; // the cycle is in here

    expect(hasCycle(head)).toBe(true);
  });

  it('should return true', () => {
    const head = new ListNode(1);
    const n2 = new ListNode(2);

    head.next = n2;
    n2.next = head; // the cycle is in here

    expect(hasCycle(head)).toBe(true);
  });

  it('should return false', () => {
    const head = new ListNode(1);

    expect(hasCycle(head)).toBe(false);
  });
});
