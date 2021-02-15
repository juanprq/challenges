const LinkedList = require('./index');

describe(LinkedList, () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should be a LinkedList', () => {
    expect(linkedList).toBeInstanceOf(LinkedList);
  });

  it('should have an add method', () => {
    expect(linkedList.add).toBeInstanceOf(Function);
  });

  it('should have a head method', () => {
    expect(linkedList.head).toBeInstanceOf(Function);
  });

  it('should have a size method', () => {
    expect(linkedList.size).toBeInstanceOf(Function);
  });

  it('should assign head to the first node added',  () => {
    linkedList.add(1);
    linkedList.add(2);

    expect(linkedList.head().element).toEqual(1);
  });

  it('should count the correct ammount of nodes', () => {
    linkedList.add(1);
    expect(linkedList.size()).toEqual(1);

    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.size()).toEqual(3);
  });

  it('should have a remove method', () => {
    expect(linkedList.remove).toBeInstanceOf(Function);
  });

  it('should remove the head of the linked list', () => {
    linkedList.add(1);
    linkedList.add(2);

    expect(linkedList.head().element).toEqual(1);
    linkedList.remove(1);
    expect(linkedList.head().element).toEqual(2);
  });

  it('should remoce and decrease the length of the linkedList', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.size()).toEqual(3);
    linkedList.remove(2);
    expect(linkedList.size()).toEqual(2);
  });

  it('should remove and reassign the reference to the previous node', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    linkedList.remove(2);
    expect(linkedList.head().next.element).toEqual(3);
  });

  it('should not change the list if the element is not present on the list', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    linkedList.remove(4);
    expect(linkedList.head().element).toEqual(1);
    expect(linkedList.head().next.element).toEqual(2);
    expect(linkedList.head().next.next.element).toEqual(3);
    expect(linkedList.head().next.next.next).toBe(null);
  });

  it('should have an isEmpty method', () => {
    expect(linkedList.isEmpty).toBeInstanceOf(Function);
  });


  it('should have an indexOf method', () => {
    expect(linkedList.indexOf).toBeInstanceOf(Function);
  });

  it('should have elementAt method', () => {
    expect(linkedList.elementAt).toBeInstanceOf(Function);
  });

  it('should return false when there are elements in the list', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.isEmpty()).toBe(false);
  });

  it('should return true when there are no elements in the list', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  it('should return the index of a given element', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.indexOf(2)).toEqual(1);
  });

  it('should return -1 if the element is not found', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.indexOf(7)).toEqual(-1);
  });

  it('should return the element at given index', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.elementAt(2)).toEqual(3);
  });

  it('should return undefined if the item is not found', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.elementAt(3)).toBeUndefined();
  });
});
