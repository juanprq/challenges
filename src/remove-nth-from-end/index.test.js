const removeNthFromEnd = require('./index');
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

describe('removeNthFromEnd', () => {
  it('should be a function', () => {
    expect(removeNthFromEnd).toBeInstanceOf(Function);
  });

  it('should return [1, 2, 3, 5]', () => {
    const input = arrayToList([1, 2, 3, 4, 5]);
    const result = listToArray(removeNthFromEnd(input, 2));

    expect(result).toEqual([1, 2, 3, 5]);
  });

  it('should return []', () => {
    const input = arrayToList([1]);
    const result = listToArray(removeNthFromEnd(input, 1));

    expect(result).toEqual([]);
  });

  it('should return [1]', () => {
    const input = arrayToList([1, 2]);
    const result = listToArray(removeNthFromEnd(input, 1));

    expect(result).toEqual([1]);
  });

  it('should return [2]', () => {
    const input = arrayToList([1, 2]);
    const result = listToArray(removeNthFromEnd(input, 2));

    expect(result).toEqual([2]);
  });
});
