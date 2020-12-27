const addTwoNumbers = require('./index');
const { ListNode } = require('./index');

describe('addTwoNumbers', () => {
  test('it should be a function', () => {
    expect(addTwoNumbers).toBeInstanceOf(Function);
  });

  test('it should return 708', () => {
    const l1 = new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(
          3,
        ),
      ),
    );
    const l2 = new ListNode(
      5,
      new ListNode(
        6,
        new ListNode(
          4,
        ),
      ),
    );

    const result = addTwoNumbers(l1, l2);
    expect(result.val).toEqual(7);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(8);
   });

  test('it should return 0', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);

    const result = addTwoNumbers(l1, l2);
    expect(result.val).toEqual(0);
    expect(result.next).toBe(null);
  });

  test('it should return 89990001', () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                9,
                new ListNode(
                  9,
                ),
              ),
            ),
          ),
        ),
      ),
    );
    const l2 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9),
        ),
      ),
    );

    const result = addTwoNumbers(l1, l2);
    [8,9,9,9,0,0,0,1]
    expect(result.val).toEqual(8);
    expect(result.next.val).toBe(9);
    expect(result.next.next.val).toBe(9);
    expect(result.next.next.next.val).toBe(9);
    expect(result.next.next.next.next.val).toBe(0);
    expect(result.next.next.next.next.next.val).toBe(0);
    expect(result.next.next.next.next.next.next.val).toBe(0);
    expect(result.next.next.next.next.next.next.next.val).toBe(1);
  });
});
