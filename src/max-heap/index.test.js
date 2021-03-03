const MaxHeap = require('./index');

describe('MaxHeap', () => {
  let maxHeap;
  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  it('should exist', () => {
    expect(maxHeap).toBeInstanceOf(MaxHeap);
  });

  it('should have a method called insert', () => {
    expect(maxHeap.insert).toBeInstanceOf(Function);
  });

  it('should have a method called print', () => {
    expect(maxHeap.print).toBeInstanceOf(Function);
  });

  it('should insert according to max heap property', () => {
    maxHeap.insert(30);
    maxHeap.insert(20);
    maxHeap.insert(28);
    maxHeap.insert(31);

    const result = [31, 30, 28, 20];
    expect(maxHeap.print()).toEqual(result);
  });

  it('should have a method called remove', () => {
    expect(maxHeap.remove).toBeInstanceOf(Function);
  });

  it('should remove the gratest element of the heap while maintaining the mx heap property', () => {
    maxHeap.insert(30);
    maxHeap.insert(20);
    maxHeap.insert(28);
    maxHeap.insert(31);

    expect(maxHeap.remove()).toEqual(31);
    expect(maxHeap.remove()).toEqual(30);
    expect(maxHeap.print()).toEqual([28, 20]);
  });
});
