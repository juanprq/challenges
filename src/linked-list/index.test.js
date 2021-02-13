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
});
