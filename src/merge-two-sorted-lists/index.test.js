const mergeTwoLists = require('./index');
const { ListNode } = require('./index');

const arrayToList = (array) => {
  let head;
  let current;

  array.forEach(element => {
    if (head) {
      current.next = new ListNode(element);
      current = current.next;
    } else {
      head = new ListNode(element);
      current = head;
    }
  });

  return head;
};

const listToArray = (head) => {
  let current = head;
  const result = [];

  while(current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

describe('mergeTwoLists', () => {
  it('should be a function', () => {
    expect(mergeTwoLists).toBeInstanceOf(Function);
  });

  it('should return [1, 1, 2, 3, 4, 4]', () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    const result = listToArray(mergeTwoLists(l1, l2));

    expect(result).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should return []', () => {
    const l1 = arrayToList([]);
    const l2 = arrayToList([]);
    const result = listToArray(mergeTwoLists(l1, l2));

    expect(result).toEqual([]);
  });

  it('should return [0]', () => {
    const l1 = arrayToList([]);
    const l2 = arrayToList([0]);
    const result = listToArray(mergeTwoLists(l1, l2));

    expect(result).toEqual([0]);
  });
});
