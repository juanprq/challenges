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
});
