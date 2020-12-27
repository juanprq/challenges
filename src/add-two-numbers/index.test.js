const addTwoNumbers = require('./index');
const { ListNode } = require('./index');

const fromArrayToList = (array) => {
  let head;
  let prev;
  array.forEach((item) => {
    const currentNode = new ListNode(item);
    if (prev) {
      prev.next = currentNode;
    } else {
      head = currentNode;
    }

    prev = currentNode;
  });

  return head;
};

const fromListToArray = (head) => {
  const array = [];
  let currentNode = head;
  while (currentNode) {
    array.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return array;
}

describe('addTwoNumbers', () => {
  test('it should be a function', () => {
    expect(addTwoNumbers).toBeInstanceOf(Function);
  });

  test('it should return 708', () => {
    const l1 = fromArrayToList([2, 4, 3]);
    const l2 = fromArrayToList([5, 6, 4]);

    const result = addTwoNumbers(l1, l2);
    expect(fromListToArray(result)).toEqual([7, 0, 8]);
   });

  test('it should return 0', () => {
    const l1 = fromArrayToList([0]);
    const l2 = fromArrayToList([0]);

    const result = addTwoNumbers(l1, l2);
    expect(fromListToArray(result)).toEqual([0]);
  });

  test('it should return 89990001', () => {
    const l1 = fromArrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = fromArrayToList([9, 9, 9, 9]);

    const result = addTwoNumbers(l1, l2);
    expect(fromListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
