const mergeKLists = require('./index');
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

describe('mergeKList', () => {
  it('should be a function', () => {
    expect(mergeKLists).toBeInstanceOf(Function);
  });

  it('should return [1, 1, 2, 3, 4, 4, 5, 6]', () => {
    const input = [
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6]),
    ];
    const result = [1, 1, 2, 3, 4, 4, 5, 6];

    expect(listToArray(mergeKLists(input))).toEqual(result);
  });

  it('should return []', () => {
    const input = [];
    expect(listToArray(mergeKLists(input))).toEqual([]);
  });

  it('should return []', () => {
    const input = [null];
    expect(listToArray(mergeKLists(input))).toEqual([]);
  });
});
