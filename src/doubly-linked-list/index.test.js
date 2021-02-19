const DoublyLinkedList = require('./index');

describe('DoublyLinkedList', () => {
  let doublyLinkedList;
  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should be of DoublyLinkedList instance', () => {
    expect(doublyLinkedList).toBeInstanceOf(DoublyLinkedList);
  });

  it('should have the add method', () => {
    expect(doublyLinkedList.add).toBeInstanceOf(Function);
  });

  it('should have the remove method', () => {
    expect(doublyLinkedList.remove).toBeInstanceOf(Function);
  });

  it('should remove an item from an empty list return null', () => {
    expect(doublyLinkedList.remove(2)).toBe(null);
  });

  it('should add items to the list', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);

    expect(doublyLinkedList.head.data).toEqual(1);
    expect(doublyLinkedList.head.next.data).toEqual(2);
    expect(doublyLinkedList.head.next.next.data).toEqual(3);
  });

  it('should track of the previous node', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);

    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.head.next.prev.data).toEqual(1);
    expect(doublyLinkedList.head.next.next.prev.data).toEqual(2);
  });

  it('should remove the first item of the list', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);

    doublyLinkedList.remove(1);
    expect(doublyLinkedList.head.data).toEqual(2);
  });

  it('should remove the first item of the list', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);

    doublyLinkedList.remove(2);
    expect(doublyLinkedList.head.next).toBe(null);
  });

  it('should have a reverse method', () => {
    expect(doublyLinkedList.reverse).toBeInstanceOf(Function);
  });

  it('should return null reversing an empty linked list', () => {
    expect(doublyLinkedList.reverse()).toEqual(null);
  });


  it('should reverse the list', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);

    doublyLinkedList.reverse();
    expect(doublyLinkedList.head.data).toEqual(3);
    expect(doublyLinkedList.head.next.data).toEqual(2);
    expect(doublyLinkedList.head.next.next.data).toEqual(1);
  });

  it('should maintain the correct references to next and prev', () => {
    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);

    doublyLinkedList.reverse();
    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.head.next.prev.data).toEqual(3);
    expect(doublyLinkedList.head.next.next.prev.data).toEqual(2);
  });
});
